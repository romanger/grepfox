import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { BlogListing } from '@/components/site/BlogListing'

type Params = { category: string }

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'categories',
    limit: 50,
    select: { slug: true },
  })
  return docs.map((c) => ({ category: c.slug as string }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { category } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'categories',
    where: { slug: { equals: category } },
    limit: 1,
  })
  const cat = docs[0]
  if (!cat) return {}
  const description = `Posts filed under ${cat.title.toLowerCase()} — field notes from the Grepfox crew.`
  return {
    title: `${cat.title} — Blog`,
    description,
    alternates: { canonical: `/blog/category/${cat.slug}` },
    openGraph: { title: `${cat.title} — Blog`, description },
  }
}

export default async function BlogCategoryPage({ params }: { params: Promise<Params> }) {
  const { category } = await params
  return <BlogListing categorySlug={category} page={1} />
}

export const dynamic = 'force-static'
export const dynamicParams = false
