import { mkdir, readFile, writeFile, stat } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import type { getPayload } from 'payload'
import { images, type ImageManifest } from './images'

const CACHE_DIR = join(tmpdir(), 'grepfox-seed-images')

async function fetchToDisk(url: string, filename: string): Promise<string> {
  await mkdir(CACHE_DIR, { recursive: true })
  const path = join(CACHE_DIR, filename)
  try {
    const s = await stat(path)
    if (s.size > 10_000) return path // cached
  } catch {}
  const res = await fetch(url)
  if (!res.ok) throw new Error(`${url} → ${res.status}`)
  const buf = Buffer.from(await res.arrayBuffer())
  await writeFile(path, buf)
  return path
}

export async function ensureMedia(
  payload: Awaited<ReturnType<typeof getPayload>>,
): Promise<Map<string, string | number>> {
  const out = new Map<string, string | number>()

  for (const img of images) {
    const existing = await payload.find({
      collection: 'media',
      where: { alt: { equals: img.alt } },
      limit: 1,
    })
    if (existing.docs[0]) {
      out.set(img.key, existing.docs[0].id as string | number)
      console.log(`  =  media/${img.key}  (exists)`)
      continue
    }
    const diskPath = await fetchToDisk(img.url, img.filename)
    const buf = await readFile(diskPath)
    const created = await payload.create({
      collection: 'media',
      data: { alt: img.alt, caption: img.credit } as any,
      file: {
        name: img.filename,
        data: buf,
        size: buf.byteLength,
        mimetype: 'image/jpeg',
      },
    })
    out.set(img.key, created.id as string | number)
    console.log(`  +  media/${img.key}`)
  }
  return out
}
