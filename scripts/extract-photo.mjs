import fs from 'node:fs'
import path from 'node:path'

try {
  const pdfPath = path.resolve(process.cwd(), 'src/assets/jm-pericias-apresentacao-61c1e.pdf')
  const pdfBuf = fs.readFileSync(pdfPath)
  const pdfStr = pdfBuf.toString('latin1')

  const streamMarker = 'stream\ns4IA0'
  const streamIdx = pdfStr.indexOf(streamMarker)
  if (streamIdx === -1) {
    console.error('Marker not found')
    process.exit(1)
  }

  const dataStart = streamIdx + 'stream\n'.length
  const dataEnd = pdfStr.indexOf('endstream', dataStart)
  const rawAscii85 = pdfStr.substring(dataStart, dataEnd).trim()

  let clean = ''
  for (let i = 0; i < rawAscii85.length; i++) {
    const ch = rawAscii85[i]
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

  const jpegBuf = Buffer.from(out)
  const outPath = path.resolve(process.cwd(), 'public/joao-moreira.jpg')
  fs.writeFileSync(outPath, jpegBuf)
  console.log('Saved JPEG to:', outPath, 'bytes:', jpegBuf.length)
} catch (err) {
  console.error(err)
}
