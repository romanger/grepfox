import type { CollectionConfig } from 'payload'

// Payload's default file url is the runtime route /api/media/file/<file>, which
// needs the server/DB and breaks on a static serverless deploy. Files live in
// /public/media, so rewrite urls to the static path /media/<file> on read.
const API_PREFIX = '/api/media/file/'
const STATIC_PREFIX = '/media/'
const toStaticURL = (url: unknown): unknown =>
  typeof url === 'string' && url.startsWith(API_PREFIX)
    ? STATIC_PREFIX + url.slice(API_PREFIX.length)
    : url

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'alt',
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterRead: [
      ({ doc }) => {
        doc.url = toStaticURL(doc.url)
        const sizes = doc.sizes as Record<string, { url?: string | null }> | undefined
        if (sizes) {
          for (const size of Object.values(sizes)) {
            if (size) size.url = toStaticURL(size.url) as string | null | undefined
          }
        }
        return doc
      },
    ],
  },
  upload: {
    staticDir: 'public/media',
    imageSizes: [
      { name: 'thumb', width: 400, height: undefined, position: 'centre' },
      { name: 'card', width: 800, height: undefined, position: 'centre' },
      { name: 'hero', width: 1920, height: undefined, position: 'centre' },
    ],
    adminThumbnail: 'thumb',
    mimeTypes: ['image/*'],
  },
  fields: [
    { name: 'alt', type: 'text', required: true },
    { name: 'caption', type: 'text' },
  ],
}
