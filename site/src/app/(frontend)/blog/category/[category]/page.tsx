import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { BlogListing } from '@/components/site/BlogListing'

type Params = { category: string }
type Search = { page?: string }

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

export default async function BlogCategoryPage({
  params,
  searchParams,
}: {
  params: Promise<Params>
  searchParams: Promise<Search>
}) {
  const { category } = await params
  const { page: pageParam } = await searchParams
  const page = Math.max(1, parseInt(pageParam || '1', 10) || 1)
  return <BlogListing categorySlug={category} page={page} />
}

export const revalidate = 60
