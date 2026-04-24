import type { Block } from 'payload'

export const AccentBlockBlock: Block = {
  slug: 'accentBlock',
  labels: { singular: 'Accent Block', plural: 'Accent Blocks' },
  fields: [
    { name: 'eyebrow', type: 'text', admin: { description: 'Top mono-label in the content column.' } },
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'textarea' },
    { name: 'footnote', type: 'text', admin: { description: 'Bottom mono-line (e.g. "— EST. 2025 · US + IL").' } },
    { name: 'image', type: 'upload', relationTo: 'media', admin: { description: 'Image shown in the right column.' } },
    { name: 'imageUrl', type: 'text', admin: { description: 'External image URL (overrides upload).' } },
  ],
}
