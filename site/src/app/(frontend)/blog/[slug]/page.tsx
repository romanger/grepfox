import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { RichText } from '@/utils/RichText'
import { MonoLabel } from '@/components/ds/MonoLabel'
import { Media } from '@/components/ds/Media'
import { PostCard } from '@/components/site/PostCard'
import { CTABanner } from '@/blocks/CTABanner/Component'
import { readingTime } from '@/utils/readingTime'
import { formatPostDate } from '@/utils/formatPostDate'
import type { Post } from '@/payload-types'

type Params = { slug: string }

const PUBLISHED = { _status: { equals: 'published' } } as const

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'posts',
    where: PUBLISHED as any,
    limit: 200,
    select: { slug: true },
  })
  return docs.map((d) => ({ slug: d.slug as string }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'posts',
    where: { and: [PUBLISHED, { slug: { equals: slug } }] } as any,
    limit: 1,
    depth: 1,
  })
  const post = docs[0]
  if (!post) return {}
  const cover = typeof post.cover === 'object' && post.cover ? post.cover : null
  return {
    title: `${post.title} — Grepfox Blog`,
    description: post.excerpt || undefined,
    openGraph: cover?.url ? { images: [{ url: cover.url }] } : undefined,
  }
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'posts',
    where: { and: [PUBLISHED, { slug: { equals: slug } }] } as any,
    limit: 1,
    depth: 1,
  })
  const post = docs[0]
  if (!post) notFound()

  const category = typeof post.category === 'object' && post.category ? post.category : null

  let related: Post[] = []
  if (category) {
    const sameCategory = await payload.find({
      collection: 'posts',
      where: { and: [PUBLISHED, { slug: { not_equals: slug } }, { category: { equals: category.id } }] } as any,
      sort: '-publishedAt',
      limit: 3,
      depth: 1,
    })
    related = sameCategory.docs
  }
  if (related.length < 3) {
    const fill = await payload.find({
      collection: 'posts',
      where: { and: [PUBLISHED, { slug: { not_equals: slug } }] } as any,
      sort: '-publishedAt',
      limit: 6,
      depth: 1,
    })
    for (const doc of fill.docs) {
      if (related.length >= 3) break
      if (!related.some((r) => r.id === doc.id)) related.push(doc)
    }
  }

  return (
    <>
      <section style={{ padding: '80px 56px 40px', borderBottom: '1px solid var(--gf-rule)' }}>
        <MonoLabel accent>
          {[
            category ? category.title.toUpperCase() : 'BLOG',
            formatPostDate(post.publishedAt),
            `${readingTime(post.body)} MIN READ`,
            post.author ? post.author.toUpperCase() : null,
          ]
            .filter(Boolean)
            .join(' · ')}
        </MonoLabel>
        <h1
          style={{
            fontFamily: 'var(--ff-display)',
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            marginTop: 16,
            maxWidth: 980,
          }}
        >
          {post.title}
        </h1>
        {post.excerpt && (
          <p style={{ marginTop: 24, fontSize: 20, color: 'var(--gf-bone-dim)', maxWidth: 760, lineHeight: 1.5 }}>
            {post.excerpt}
          </p>
        )}
      </section>

      {(post.cover || post.coverUrl) && (
        <div style={{ position: 'relative', height: 420 }}>
          <Media
            media={post.cover}
            src={post.coverUrl}
            size="hero"
            filtered
            style={{ position: 'absolute', inset: 0, height: '100%' }}
          />
        </div>
      )}

      {post.body && (
        <div className="block-pad" style={{ maxWidth: 760 }}>
          <RichText data={post.body} className="richtext richtext--article" />
        </div>
      )}

      {related.length > 0 && (
        <section className="block-pad" style={{ borderTop: '1px solid var(--gf-rule)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24 }}>
            <MonoLabel accent>RELATED READING</MonoLabel>
            <Link href="/blog" className="mono-label" style={{ textDecoration: 'none' }}>
              ALL POSTS →
            </Link>
          </div>
          <div className="post-grid-frame">
            <div className="post-grid">
              {related.map((p) => (
                <PostCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        accent={false}
        eyebrow="NEXT STEP"
        title="GOT A PROJECT IN MIND?"
        action={{ link: { type: 'external', url: '/contact', label: 'START A CONVERSATION' } }}
      />
    </>
  )
}

export const revalidate = 60
