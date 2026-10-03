import fs from 'node:fs'
import path from 'node:path'
import zlib from 'node:zlib'

function decodeAscii85(str) {
  let clean = ''
  for (let i = 0; i < str.length; i++) {
    const ch = str[i]
    if (ch > ' ') clean += ch
  }
  if (clean.endsWith('~>')) {
    clean = clean.substring(0, clean.length - 2)
  }

  const out = []
  let i = 0
  while (i < clean.length) {
    if (clean[i] === 'z') {
      out.push(0, 0, 0, 0)
      i++
      continue
    }
    let count = 0
    let val = 0
    for (let j = 0; j < 5; j++) {
      if (i < clean.length) {
        const c = clean.charCodeAt(i++) - 33
        val = val * 85 + c
        count++
      } else {
        val = val * 85 + 84
      }
    }
    if (count > 1) {
      const b0 = (val >>> 24) & 0xff
      const b1 = (val >>> 16) & 0xff
      const b2 = (val >>> 8) & 0xff
      const b3 = val & 0xff
      if (count >= 2) out.push(b0)
      if (count >= 3) out.push(b1)
      if (count >= 4) out.push(b2)
      if (count >= 5) out.push(b3)
    }
  }
  return Buffer.from(out)
}

const pdfPath = path.resolve('src/assets/jm-pericias-apresentacao-61c1e.pdf')
const buf = fs.readFileSync(pdfPath)
const latin = buf.toString('latin1')

// Let's find all occurrences of "/Subtype/Image" or "/Subtype /Image"
let pos = 0
const results = []

while (true) {
  const idx = latin.indexOf('/Image', pos)
  if (idx === -1) break
  pos = idx + 6

  // Look around idx to find obj declaration and stream
  const prevObj = latin.lastIndexOf(' obj', idx)
  if (prevObj === -1) continue

  const lineStart = latin.lastIndexOf('\n', prevObj - 1)
  const objHeader = latin.substring(lineStart === -1 ? 0 : lineStart + 1, prevObj + 4).trim()

  const streamIdx = latin.indexOf('stream', idx)
  const endobjIdx = latin.indexOf('endobj', idx)

  if (streamIdx !== -1 && endobjIdx !== -1 && streamIdx < endobjIdx) {
    const dictText = latin.substring(prevObj + 4, streamIdx)
    const endstreamIdx = latin.indexOf('endstream', streamIdx)

    let streamStart = streamIdx + 6
    if (latin[streamStart] === '\r') streamStart++
    if (latin[streamStart] === '\n') streamStart++

    const streamData = latin.substring(streamStart, endstreamIdx)

    const wMatch = dictText.match(/\/Width\s+(\d+)/)
    const hMatch = dictText.match(/\/Height\s+(\d+)/)
    const fMatch = dictText.match(/\/Filter\s*(\[[^\]]+\]|\/[A-Za-z0-9]+)/)

    results.push({
      header: objHeader,
      width: wMatch ? parseInt(wMatch[1], 10) : null,
      height: hMatch ? parseInt(hMatch[1], 10) : null,
      filter: fMatch ? fMatch[1] : null,
      dictSnippet: dictText.replace(/\s+/g, ' ').slice(0, 150),
      streamLen: streamData.length,
      streamStart50: streamData.slice(0, 50),
      streamData,
    })
  }
}

const log = []
log.push(`Found ${results.length} image occurrences:`)
fs.mkdirSync('extracted-images', { recursive: true })

results.forEach((res, index) => {
  log.push(
    `\n#${index + 1}: ${res.header} | ${res.width}x${res.height} | filter: ${res.filter} | streamLen: ${res.streamLen}`,
  )
  log.push(`Dict: ${res.dictSnippet}`)
  log.push(`Start: ${JSON.stringify(res.streamStart50)}`)

  let data = Buffer.from(res.streamData, 'latin1')
  if (res.filter && res.filter.includes('ASCII85')) {
    data = decodeAscii85(res.streamData)
  }
  if (res.filter && res.filter.includes('FlateDecode')) {
    try {
      data = zlib.inflateSync(data)
    } catch (e) {
      log.push(`Flate decode error: ${e.message}`)
    }
  }

  let ext = 'bin'
  if (data[0] === 0xff && data[1] === 0xd8) {
    ext = 'jpg'
  } else if (data[0] === 0x89 && data[1] === 0x50) {
    ext = 'png'
  }

  const filename = `extracted-images/img_${index + 1}_${res.width}x${res.height}.${ext}`
  fs.writeFileSync(filename, data)
  log.push(`Wrote ${filename} (${data.length} bytes, format: ${ext})`)
})

fs.writeFileSync('scripts/extraction-log.txt', log.join('\n'))
console.log(log.join('\n'))
