import type { GlobalConfig } from 'payload'
import { linkField } from '@/fields/link'
import { iconOptions } from '@/blocks/_shared/iconOptions'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: { read: () => true },
  fields: [
    { name: 'brandTag', type: 'text', admin: { description: 'Small mono-line under the logo (e.g. "TECH PARTNER · MARKETING").' } },
    { name: 'tagline', type: 'textarea' },
    {
      name: 'columns',
      type: 'array',
      maxRows: 5,
      fields: [
        { name: 'title', type: 'text', required: true },
        {
          name: 'links',
          type: 'array',
          fields: [
            { name: 'icon', type: 'select', options: iconOptions },
            linkField({ appearances: false }),
          ],
        },
      ],
    },
    { name: 'copyright', type: 'text' },
    {
      name: 'legal',
      type: 'array',
      maxRows: 6,
      fields: [
        { name: 'icon', type: 'select', options: iconOptions },
        linkField({ appearances: false }),
      ],
    },
  ],
}
