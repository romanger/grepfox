import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { allBlocks } from '@/blocks'
import { iconOptions } from '@/blocks/_shared/iconOptions'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'tier', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    { name: 'summary', type: 'textarea', admin: { description: 'Shown in cards and grids.' } },
    { name: 'icon', type: 'select', options: iconOptions },
    {
      name: 'tier',
      type: 'select',
      options: [
        { label: 'Core', value: 'core' },
        { label: 'Pro', value: 'pro' },
        { label: 'Enterprise', value: 'enterprise' },
      ],
    },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroImageUrl', type: 'text', admin: { description: 'External hero image URL.' } },
    {
      name: 'body',
      type: 'richText',
      editor: lexicalEditor({}),
    },
    {
      name: 'layout',
      label: 'Detail Page Blocks',
      type: 'blocks',
      blocks: allBlocks,
    },
  ],
}
