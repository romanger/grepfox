import type { Block } from 'payload'
import { linkField } from '@/fields/link'

export const HeroSplitBlock: Block = {
  slug: 'heroSplit',
  labels: { singular: 'Hero — Split', plural: 'Heroes — Split' },
  fields: [
    { name: 'eyebrow', type: 'text', admin: { description: 'Mono label above title.' } },
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'textarea' },
    {
      name: 'actions',
      type: 'array',
      maxRows: 3,
      fields: [linkField()],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'imageUrl',
      type: 'text',
      admin: { description: 'External image URL (e.g. Unsplash). Overrides uploaded image if set.' },
    },
    {
      name: 'imageCaption',
      type: 'text',
      admin: { description: 'Mono caption displayed over/under the image.' },
    },
  ],
}
