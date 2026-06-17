import type { Block } from 'payload'

export const SectionHeadBlock: Block = {
  slug: 'sectionHead',
  labels: { singular: 'Section Head', plural: 'Section Heads' },
  fields: [
    {
      name: 'number',
      type: 'text',
      admin: { description: 'e.g. "SECTION 01". Shown in orange mono.' },
    },
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'textarea' },
    { name: 'surface', type: 'checkbox', admin: { description: 'Raised surface background (pairs with a surface block below).' } },
  ],
}
