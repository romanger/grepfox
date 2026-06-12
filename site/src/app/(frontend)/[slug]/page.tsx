import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { RenderBlocks } from '@/utils/RenderBlocks'

type Params = { slug: string }

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'pages',
    limit: 200,
    select: { slug: true },
  })
  return docs
    .map((d) => d.slug as string)
    .filter((slug) => slug && slug !== 'home')
    .map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
    limit: 1,
  })
  const page = docs[0]
  if (!page) return {}
  const title = (page.metaTitle as string) || (page.title as string)
  const description = (page.metaDescription as string) || undefined
  const metaImage = typeof page.metaImage === 'object' && page.metaImage ? page.metaImage : null
  return {
    title,
    description,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      title,
      description,
      images: metaImage?.url ? [{ url: metaImage.url }] : undefined,
    },
  }
}

export default async function DynamicPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
  })
  const page = docs[0]
  if (!page) notFound()

  return <RenderBlocks blocks={(page.layout as any) || []} />
}

export const revalidate = 60
