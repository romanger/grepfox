import type { GlobalConfig } from 'payload'
import { linkField } from '@/fields/link'
import { iconOptions } from '@/blocks/_shared/iconOptions'

export const Header: GlobalConfig = {
  slug: 'header',
  access: { read: () => true },
  fields: [
    {
      name: 'nav',
      type: 'array',
      maxRows: 7,
      fields: [
        { name: 'icon', type: 'select', options: iconOptions, admin: { description: 'Optional icon before the link label.' } },
        linkField({ appearances: false }),
      ],
    },
    {
      name: 'cta',
      type: 'group',
      fields: [linkField()],
    },
  ],
}
