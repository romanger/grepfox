import type { Block } from 'payload'
import { iconOptions } from '@/blocks/_shared/iconOptions'

export const FeatureGridBlock: Block = {
  slug: 'featureGrid',
  labels: { singular: 'Services Grid', plural: 'Services Grids' },
  fields: [
    {
      name: 'columns',
      type: 'select',
      defaultValue: '3',
      options: [
        { label: '2 columns', value: '2' },
        { label: '3 columns', value: '3' },
        { label: '4 columns', value: '4' },
      ],
    },
    {
      name: 'items',
      type: 'array',
      minRows: 2,
      fields: [
        { name: 'icon', type: 'select', options: iconOptions },
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'imageUrl', type: 'text', admin: { description: 'External image URL (overrides upload).' } },
        { name: 'tag', type: 'text', admin: { description: 'Optional badge over image (mono label).' } },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
        {
          name: 'linkedService',
          type: 'relationship',
          relationTo: 'services',
          admin: { description: 'Optional deep-link to service detail page.' },
        },
      ],
    },
  ],
}
