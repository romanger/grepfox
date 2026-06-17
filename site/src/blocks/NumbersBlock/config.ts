import type { Block } from 'payload'

export const NumbersBlock: Block = {
  slug: 'numbers',
  labels: { singular: 'Numbers Band', plural: 'Numbers Bands' },
  fields: [
    {
      name: 'items',
      type: 'array',
      minRows: 2,
      maxRows: 6,
      fields: [
        { name: 'value', type: 'text', required: true, admin: { description: 'e.g. "99.8%", "24/7", "1.2s".' } },
        { name: 'label', type: 'text', required: true },
        { name: 'sublabel', type: 'text' },
        { name: 'accent', type: 'checkbox', admin: { description: 'Render value in hazard orange. First item defaults to accent if unset.' } },
      ],
    },
    { name: 'surface', type: 'checkbox', admin: { description: 'Fill the band with a raised surface background.' } },
  ],
}
