import type { Block } from 'payload'

export const MarqueeBlock: Block = {
  slug: 'marquee',
  labels: { singular: 'Marquee', plural: 'Marquees' },
  fields: [
    {
      name: 'items',
      type: 'array',
      minRows: 3,
      fields: [{ name: 'text', type: 'text', required: true }],
    },
    { name: 'accent', type: 'checkbox', admin: { description: 'Orange (hazard) background for a bright accent break.' } },
  ],
}
