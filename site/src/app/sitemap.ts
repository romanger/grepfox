import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

const ORIGIN = process.env.NEXT_PUBLIC_SERVER_URL || 'https://grepfox.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayload({ config })
  const [pages, services, categories, posts] = await Promise.all([
    payload.find({ collection: 'pages', limit: 200, select: { slug: true, updatedAt: true } }),
    payload.find({ collection: 'services', limit: 200, select: { slug: true, updatedAt: true } }),
    payload.find({ collection: 'categories', limit: 50, select: { slug: true, updatedAt: true } }),
    payload.find({
      collection: 'posts',
      where: { _status: { equals: 'published' } } as any,
      limit: 500,
      select: { slug: true, updatedAt: true },
    }),
  ])

  const entry = (path: string, lastModified?: string | null): MetadataRoute.Sitemap[number] => ({
    url: `${ORIGIN}${path}`,
    lastModified: lastModified ? new Date(lastModified) : undefined,
  })

  const home = pages.docs.find((p) => p.slug === 'home')
  const latestPost = posts.docs[0]

  return [
    entry('/', home?.updatedAt),
    ...pages.docs
      .filter((p) => p.slug && p.slug !== 'home')
      .map((p) => entry(`/${p.slug}`, p.updatedAt)),
    ...services.docs.map((s) => entry(`/services/${s.slug}`, s.updatedAt)),
    entry('/blog', latestPost?.updatedAt),
    ...categories.docs.map((c) => entry(`/blog/category/${c.slug}`, c.updatedAt)),
    ...posts.docs.map((p) => entry(`/blog/${p.slug}`, p.updatedAt)),
  ]
}

export const dynamic = 'force-static'
