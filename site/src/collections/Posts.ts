import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'category', 'publishedAt'],
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
    { name: 'excerpt', type: 'textarea', admin: { description: 'Shown in cards and used as meta description.' } },
    { name: 'cover', type: 'upload', relationTo: 'media' },
    { name: 'coverUrl', type: 'text', admin: { description: 'External cover image URL.' } },
    { name: 'category', type: 'relationship', relationTo: 'categories' },
    { name: 'author', type: 'text' },
    { name: 'publishedAt', type: 'date', admin: { date: { pickerAppearance: 'dayOnly' } } },
    {
      name: 'body',
      type: 'richText',
      editor: lexicalEditor({}),
    },
  ],
}
