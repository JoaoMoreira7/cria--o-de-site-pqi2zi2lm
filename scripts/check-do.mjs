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

const marker = `11 0 obj`
const objIdx = latin.indexOf(marker)
const streamIdx = latin.indexOf('stream', objIdx)
const endStreamIdx = latin.indexOf('endstream', streamIdx)
let sStart = streamIdx + 6
if (latin[sStart] === '\r') sStart++
if (latin[sStart] === '\n') sStart++
const raw = latin.substring(sStart, endStreamIdx)
const inflated = zlib.inflateSync(decodeAscii85(raw)).toString('latin1')

const doMatches = inflated.match(/\/([A-Za-z0-9_]+)\s+Do/g)
console.log('Do calls in stream 11:', doMatches)

// Let's also check where the XObjects are placed
const lines = inflated.split('\n')
const doLines = lines.filter((l) => l.includes('Do') || (l.includes('cm') && l.includes('q')))
fs.writeFileSync('scripts/stream11-commands.txt', inflated)
fs.writeFileSync('scripts/do-lines.txt', doLines.join('\n'))
