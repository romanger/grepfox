import type { Block } from 'payload'

export const LogoWallBlock: Block = {
  slug: 'logoWall',
  labels: { singular: 'Logo Wall', plural: 'Logo Walls' },
  fields: [
    { name: 'heading', type: 'text', admin: { description: 'Left mono-label in the header.' }, defaultValue: 'TRUSTED BY' },
    { name: 'meta', type: 'text', admin: { description: 'Optional right mono-label (e.g. "38 TEAMS · GROWING").' } },
    {
      name: 'logos',
      type: 'array',
      minRows: 2,
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'image', type: 'upload', relationTo: 'media' },
      ],
    },
  ],
}
