import type { Block } from 'payload'

export const AccordionFAQBlock: Block = {
  slug: 'accordionFaq',
  labels: { singular: 'Accordion (FAQ)', plural: 'Accordions (FAQ)' },
  fields: [
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'question', type: 'text', required: true },
        { name: 'answer', type: 'textarea', required: true },
      ],
    },
  ],
}
