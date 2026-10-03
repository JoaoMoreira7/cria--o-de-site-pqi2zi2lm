import fs from 'node:fs'
import path from 'node:path'

const pdfPath = path.resolve(process.cwd(), 'src/assets/jm-pericias-apresentacao-61c1e.pdf')
const pdfBuf = fs.readFileSync(pdfPath)
const pdfStr = pdfBuf.toString('latin1')

const streamMarker = 'stream\ns4IA0'
const streamIdx = pdfStr.indexOf(streamMarker)
if (streamIdx === -1) {
  throw new Error('Marker not found')
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

// Check header
if (jpegBuf[0] !== 0xff || jpegBuf[1] !== 0xd8) {
  throw new Error('Not a JPEG! Magic: ' + jpegBuf[0].toString(16) + ' ' + jpegBuf[1].toString(16))
}

const b64 = jpegBuf.toString('base64')
const dataUri = `data:image/jpeg;base64,${b64}`

const tsContent = `/**
 * Imagem extraída com fidelidade do documento institucional enviado pelo profissional
 * (JM-Pericias-Apresentacao-61c1e.pdf - XObject Image 410x785).
 */
export const JOAO_MOREIRA_PHOTO_SRC = "${dataUri}"
`

fs.writeFileSync(path.resolve(process.cwd(), 'src/assets/joao-moreira-photo.ts'), tsContent)
console.log('Success! Photo size in bytes:', jpegBuf.length, 'Base64 length:', b64.length)
