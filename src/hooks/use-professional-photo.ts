import React, { useEffect, useState } from 'react'
import pdfUrl from '../assets/jm-pericias-apresentacao-61c1e.pdf'

/**
 * Hook para obter a foto real extraída diretamente do PDF institucional do profissional.
 */
export function useProfessionalPhoto(): string | null {
  const [photoSrc, setPhotoSrc] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      try {
        return sessionStorage.getItem('jm_photo_cache')
      } catch {
        return null
      }
    }
    return null
  })

  useEffect(() => {
    if (photoSrc) return

    let isMounted = true

    async function extractPhoto() {
      try {
        const response = await fetch(pdfUrl)
        const arrayBuffer = await response.arrayBuffer()
        const uint8 = new Uint8Array(arrayBuffer)

        // Find stream marker
        // Look for "stream\ns4IA0" or "stream\r\ns4IA0" or ASCII 115 52 73 65 48 ('s4IA0')
        const marker = [115, 52, 73, 65, 48] // 's4IA0'
        let startIdx = -1
        for (let i = 0; i < uint8.length - 10; i++) {
          if (
            uint8[i] === marker[0] &&
            uint8[i + 1] === marker[1] &&
            uint8[i + 2] === marker[2] &&
            uint8[i + 3] === marker[3] &&
            uint8[i + 4] === marker[4]
          ) {
            startIdx = i
            break
          }
        }

        if (startIdx === -1) return

        // Find "endstream" marker
        // 'endstream' = [101, 110, 100, 115, 116, 114, 101, 97, 109]
        let endIdx = -1
        for (let i = startIdx; i < uint8.length - 9; i++) {
          if (
            uint8[i] === 101 &&
            uint8[i + 1] === 110 &&
            uint8[i + 2] === 100 &&
            uint8[i + 3] === 115 &&
            uint8[i + 4] === 116 &&
            uint8[i + 5] === 114 &&
            uint8[i + 6] === 101 &&
            uint8[i + 7] === 97 &&
            uint8[i + 8] === 109
          ) {
            endIdx = i
            break
          }
        }

        if (endIdx === -1) return

        // Extract ASCII85 characters (ignoring whitespace and ending '~>')
        const cleanChars: number[] = []
        for (let i = startIdx; i < endIdx; i++) {
          const byte = uint8[i]
          if (byte > 32) {
            cleanChars.push(byte)
          }
        }

        // Remove trailing '~>'
        if (
          cleanChars.length >= 2 &&
          cleanChars[cleanChars.length - 2] === 126 && // '~'
          cleanChars[cleanChars.length - 1] === 62 // '>'
        ) {
          cleanChars.pop()
          cleanChars.pop()
        }

        // Ascii85 decode
        const out: number[] = []
        let i = 0
        while (i < cleanChars.length) {
          if (cleanChars[i] === 122) {
            // 'z'
            out.push(0, 0, 0, 0)
            i++
            continue
          }
          let count = 0
          let val = 0
          for (let j = 0; j < 5; j++) {
            if (i < cleanChars.length) {
              const c = cleanChars[i++] - 33
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

        const jpegBytes = new Uint8Array(out)
        // Verify JPEG magic
        if (jpegBytes[0] === 0xff && jpegBytes[1] === 0xd8) {
          const blob = new Blob([jpegBytes], { type: 'image/jpeg' })
          const url = URL.createObjectURL(blob)
          if (isMounted) {
            setPhotoSrc(url)
            try {
              // Also build base64 for instant cache
              const reader = new FileReader()
              reader.onloadend = () => {
                if (typeof reader.result === 'string') {
                  try {
                    sessionStorage.setItem('jm_photo_cache', reader.result)
                  } catch {
                    /* intentionally ignored */
                  }
                }
              }
              reader.readAsDataURL(blob)
            } catch {
              /* intentionally ignored */
            }
          }
        }
      } catch (err) {
        console.error('Erro ao carregar foto do PDF:', err)
      }
    }

    extractPhoto()

    return () => {
      isMounted = false
    }
  }, [photoSrc])

  return photoSrc
}
