import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { linkField } from '@/fields/link'

export const SplitLayoutBlock: Block = {
  slug: 'splitLayout',
  labels: { singular: 'Split Layout', plural: 'Split Layouts' },
  fields: [
    {
      name: 'imageSide',
      type: 'select',
      defaultValue: 'right',
      options: [
        { label: 'Image right', value: 'right' },
        { label: 'Image left', value: 'left' },
      ],
    },
    { name: 'eyebrow', type: 'text' },
    { name: 'title', type: 'text', required: true },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({}),
    },
    {
      name: 'action',
      type: 'group',
      fields: [linkField()],
    },
    { name: 'image', type: 'upload', relationTo: 'media' },
    { name: 'imageUrl', type: 'text', admin: { description: 'External image URL (overrides upload).' } },
  ],
}
