import type { Block } from 'payload'
import { linkField } from '@/fields/link'

export const PricingGridBlock: Block = {
  slug: 'pricingGrid',
  labels: { singular: 'Pricing Grid', plural: 'Pricing Grids' },
  fields: [
    {
      name: 'plans',
      type: 'array',
      minRows: 2,
      maxRows: 4,
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'price', type: 'text', required: true, admin: { description: 'Raw text, e.g. "$2,400".' } },
        { name: 'priceSub', type: 'text', admin: { description: 'e.g. "per month".' } },
        { name: 'hot', type: 'checkbox', admin: { description: 'Highlighted plan (elevated surface + badge).' } },
        { name: 'badge', type: 'text', defaultValue: 'MOST POPULAR' },
        {
          name: 'features',
          type: 'array',
          fields: [{ name: 'text', type: 'text', required: true }],
        },
        {
          name: 'cta',
          type: 'group',
          fields: [linkField()],
        },
      ],
    },
  ],
}
