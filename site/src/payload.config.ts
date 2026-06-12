import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Services } from './collections/Services'
import { Subscribers } from './collections/Subscribers'
import { Categories } from './collections/Categories'
import { Posts } from './collections/Posts'
import { Header } from './globals/Header'
import { Footer } from './globals/Footer'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: ' — Grepfox CMS',
    },
  },
  editor: lexicalEditor({}),
  collections: [Users, Media, Pages, Services, Categories, Posts, Subscribers],
  globals: [Header, Footer],
  secret: process.env.PAYLOAD_SECRET || 'dev-only-secret-change-me',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || 'file:./grepfox.db',
    },
  }),
  sharp: (await import('sharp')).default,
})
