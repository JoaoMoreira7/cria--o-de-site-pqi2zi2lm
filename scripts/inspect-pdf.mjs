import fs from 'node:fs'
import path from 'node:path'

const pdfPath = path.resolve('src/assets/jm-pericias-apresentacao-61c1e.pdf')
const buf = fs.readFileSync(pdfPath)
const latin = buf.toString('latin1')

console.log('PDF total size:', buf.length)

// Search for XObject and Image objects
const objRegex = /(\d+)\s+(\d+)\s+obj\s*<<([\s\S]*?)>>\s*(?:stream\r?\n([\s\S]*?)\r?\nendstream)?/g
let match
const images = []

while ((match = objRegex.exec(latin)) !== null) {
  const [full, objId, genId, dict, streamContent] = match
  if (dict.includes('/Subtype /Image') || dict.includes('/Subtype/Image')) {
    images.push({
      id: `${objId} ${genId}`,
      dict: dict.replace(/\s+/g, ' ').trim(),
      hasStream: !!streamContent,
      streamLen: streamContent ? streamContent.length : 0,
      preview: streamContent ? streamContent.slice(0, 30) : '',
    })
  }
}

console.log('Images found via dict search:', images.length)
for (const img of images) {
  console.log(`Obj ${img.id}: ${img.dict} | streamLen: ${img.streamLen}`)
  console.log(`Preview: ${JSON.stringify(img.preview)}`)
}
