import type { CollectionConfig } from 'payload'
import { allBlocks } from '@/blocks'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data }) => {
        const slug = (data?.slug as string) || ''
        const path = !slug || slug === 'home' ? '/' : `/${slug}`
        return `${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}${path}`
      },
    },
  },
  access: {
    read: () => true,
  },
  versions: {
    drafts: {
      autosave: { interval: 800 },
    },
    maxPerDoc: 20,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: { description: 'URL path. Use "home" for the homepage.' },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Layout',
          fields: [
            {
              name: 'layout',
              label: 'Page Blocks',
              type: 'blocks',
              blocks: allBlocks,
            },
          ],
        },
        {
          label: 'SEO',
          fields: [
            { name: 'metaTitle', type: 'text' },
            { name: 'metaDescription', type: 'textarea' },
            { name: 'metaImage', type: 'upload', relationTo: 'media' },
          ],
        },
      ],
    },
  ],
}
