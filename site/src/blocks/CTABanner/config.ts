import type { Block } from 'payload'
import { linkField } from '@/fields/link'
import { iconOptions } from '@/blocks/_shared/iconOptions'

export const CTABannerBlock: Block = {
  slug: 'ctaBanner',
  labels: { singular: 'CTA Banner', plural: 'CTA Banners' },
  fields: [
    {
      name: 'accent',
      type: 'checkbox',
      defaultValue: true,
      admin: { description: 'Orange background. Uncheck for dark surface.' },
    },
    { name: 'eyebrow', type: 'text' },
    { name: 'title', type: 'text', required: true },
    {
      name: 'action',
      type: 'group',
      fields: [linkField()],
    },
    {
      name: 'contacts',
      type: 'array',
      maxRows: 4,
      fields: [
        { name: 'icon', type: 'select', options: iconOptions },
        { name: 'value', type: 'text', required: true, admin: { description: 'e.g. "HELLO@GREPFOX.CO".' } },
      ],
    },
  ],
}
