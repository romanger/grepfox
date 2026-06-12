import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { RenderBlocks } from '@/utils/RenderBlocks'
import { RichText } from '@/utils/RichText'
import { MonoLabel } from '@/components/ds/MonoLabel'
import { Media } from '@/components/ds/Media'

type Params = { slug: string }

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'services',
    limit: 200,
    select: { slug: true },
  })
  return docs.map((d) => ({ slug: d.slug as string }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'services',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 1,
  })
  const svc = docs[0]
  if (!svc) return {}
  const title = svc.title as string
  const description = (svc.summary as string) || undefined
  const heroImage = typeof svc.heroImage === 'object' && svc.heroImage ? svc.heroImage : null
  const image = heroImage?.url || (svc.heroImageUrl as string | undefined)
  return {
    title,
    description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title,
      description,
      images: image ? [{ url: image }] : undefined,
    },
  }
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'services',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
  })
  const svc = docs[0]
  if (!svc) notFound()

  return (
    <>
      <section className="block-spacer" style={{ padding: '80px 56px 40px', borderBottom: '1px solid var(--gf-rule)' }}>
        <MonoLabel accent>SERVICE · {(svc.tier as string)?.toUpperCase() || 'CORE'}</MonoLabel>
        <h1
          style={{
            fontFamily: 'var(--ff-display)',
            fontSize: 128,
            fontWeight: 700,
            letterSpacing: '-0.05em',
            lineHeight: 0.9,
            marginTop: 16,
          }}
        >
          {svc.title as string}
        </h1>
        {svc.summary && (
          <p style={{ marginTop: 24, fontSize: 20, color: 'var(--gf-bone-dim)', maxWidth: 760, lineHeight: 1.5 }}>
            {svc.summary as string}
          </p>
        )}
      </section>
      {(svc.heroImage || svc.heroImageUrl) && (
        <div style={{ position: 'relative', height: 420 }}>
          <Media
            media={svc.heroImage as any}
            src={svc.heroImageUrl as string | undefined}
            size="hero"
            filtered
            style={{ position: 'absolute', inset: 0, height: '100%' }}
          />
        </div>
      )}
      {svc.body && (
        <div className="block-pad" style={{ maxWidth: 820 }}>
          <RichText data={svc.body} />
        </div>
      )}
      <RenderBlocks blocks={(svc.layout as any) || []} />
    </>
  )
}

export const revalidate = 60
