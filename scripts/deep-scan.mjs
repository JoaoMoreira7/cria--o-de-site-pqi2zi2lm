import fs from 'node:fs'
import path from 'node:path'

const pdfPath = path.resolve('src/assets/jm-pericias-apresentacao-61c1e.pdf')
const buf = fs.readFileSync(pdfPath)
const latin = buf.toString('latin1')

const log = []
log.push(`File size: ${buf.length}`)

// 1. Search all "stream" occurrences
const streamPositions = []
let pos = 0
while (true) {
  const idx = latin.indexOf('stream', pos)
  if (idx === -1) break
  streamPositions.push(idx)
  pos = idx + 6
}
log.push(`Total "stream" occurrences: ${streamPositions.length}`)

for (let i = 0; i < streamPositions.length; i++) {
  const sPos = streamPositions[i]
  // Find preceding obj
  const prevObj = latin.lastIndexOf('obj', sPos)
  const header =
    prevObj !== -1
      ? latin
          .slice(Math.max(0, prevObj - 30), sPos)
          .replace(/\s+/g, ' ')
          .trim()
      : ''
  const endStream = latin.indexOf('endstream', sPos)
  const len = endStream !== -1 ? endStream - sPos : -1
  const snippet = latin
    .slice(sPos + 6, sPos + 36)
    .replace(/\r/g, '\\r')
    .replace(/\n/g, '\\n')
  log.push(`Stream #${i + 1} at ${sPos} (obj near: ${header}): len=${len}, start=${snippet}`)
}

// 2. Search for common image markers in PDF: /DCTDecode, /FlateDecode, /Image, /XObject, /JBIG2Decode, JFIF
const dctCount = (latin.match(/\/DCTDecode/g) || []).length
const flateCount = (latin.match(/\/FlateDecode/g) || []).length
const imageCount = (latin.match(/\/Image/g) || []).length
const xobjectCount = (latin.match(/\/XObject/g) || []).length
const jfifCount = (latin.match(/JFIF/g) || []).length
const exifCount = (latin.match(/Exif/g) || []).length

log.push(`\nKeywords count:`)
log.push(`/DCTDecode: ${dctCount}`)
log.push(`/FlateDecode: ${flateCount}`)
log.push(`/Image: ${imageCount}`)
log.push(`/XObject: ${xobjectCount}`)
log.push(`JFIF: ${jfifCount}`)
log.push(`Exif: ${exifCount}`)

// 3. Search for pages
const pages = (latin.match(/\/Type\s*\/Page[^s]/g) || []).length
log.push(`\nPages count: ${pages}`)

fs.writeFileSync('scripts/deep-scan-log.txt', log.join('\n'))
console.log(log.join('\n'))
