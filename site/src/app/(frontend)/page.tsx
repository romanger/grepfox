import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { RenderBlocks } from '@/utils/RenderBlocks'

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'home' } },
    limit: 1,
  })
  const page = docs[0]
  if (!page) return {}
  const title = (page.metaTitle as string) || (page.title as string)
  const description = (page.metaDescription as string) || undefined
  const metaImage = typeof page.metaImage === 'object' && page.metaImage ? page.metaImage : null
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: '/' },
    openGraph: {
      title,
      description,
      images: metaImage?.url ? [{ url: metaImage.url }] : undefined,
    },
  }
}

export default async function HomePage() {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'home' } },
    limit: 1,
    depth: 2,
  })

  const page = docs[0]
  if (!page) {
    return (
      <div className="block-pad--wide" style={{ padding: '120px 56px' }}>
        <div className="mono-label mono-label--accent">NO HOMEPAGE YET</div>
        <h1 style={{ fontFamily: 'var(--ff-display)', fontSize: 88, marginTop: 16 }}>
          Create a page with slug <code style={{ color: 'var(--gf-accent)' }}>home</code>
        </h1>
        <p style={{ color: 'var(--gf-subtle)', marginTop: 12, maxWidth: 640 }}>
          Visit <code>/admin</code>, create a new page, set slug to <code>home</code>, and start
          stacking blocks from the design system.
        </p>
      </div>
    )
  }

  return <RenderBlocks blocks={(page.layout as any) || []} />
}

export const revalidate = 60
