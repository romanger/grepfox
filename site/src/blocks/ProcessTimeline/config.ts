import type { Block } from 'payload'

export const ProcessTimelineBlock: Block = {
  slug: 'processTimeline',
  labels: { singular: 'Process Timeline', plural: 'Process Timelines' },
  fields: [
    {
      name: 'steps',
      type: 'array',
      minRows: 2,
      fields: [
        { name: 'number', type: 'text', admin: { description: 'e.g. "01". Auto-generated if empty.' } },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
      ],
    },
    { name: 'surface', type: 'checkbox', admin: { description: 'Raised surface background.' } },
  ],
}
