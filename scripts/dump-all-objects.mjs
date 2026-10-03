import fs from 'node:fs'
import path from 'node:path'

const pdfPath = path.resolve('src/assets/jm-pericias-apresentacao-61c1e.pdf')
const buf = fs.readFileSync(pdfPath)
const latin = buf.toString('latin1')

const objRegex = /(\d+\s+\d+\s+obj[\s\S]*?endobj)/g
let m
let count = 0
const objList = []

while ((m = objRegex.exec(latin)) !== null) {
  count++
  const fullObj = m[1]
  const idMatch = fullObj.match(/^(\d+\s+\d+)\s+obj/)
  const id = idMatch ? idMatch[1] : `unknown_${count}`
  const hasStream = fullObj.includes('stream')
  const streamIdx = fullObj.indexOf('stream')
  const dict = streamIdx !== -1 ? fullObj.slice(0, streamIdx) : fullObj
  
  objList.push(`--- OBJ ${id} (len: ${fullObj.length}, hasStream: ${hasStream}) ---`)
  objList.push(dict.replace(/\r?\n/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 300))
}

fs.writeFileSync('scripts/all-objects.txt', objList.join('\n\n'))
console.log(`Total objects: ${count}`)
