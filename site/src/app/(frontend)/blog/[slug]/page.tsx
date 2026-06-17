import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { RichText } from '@/utils/RichText'
import { Icon } from '@/components/ds/Icon'
import { MonoLabel } from '@/components/ds/MonoLabel'
import { Media } from '@/components/ds/Media'
import { PostCard } from '@/components/site/PostCard'
import { NewsletterBand } from '@/components/site/NewsletterBand'
import { CTABanner } from '@/blocks/CTABanner/Component'
import { readingTime } from '@/utils/readingTime'
import { formatPostDate } from '@/utils/formatPostDate'
import type { Post } from '@/payload-types'

type Params = { slug: string }

const PUBLISHED = { _status: { equals: 'published' } } as const

const ORIGIN = process.env.NEXT_PUBLIC_SERVER_URL || 'https://grepfox.com'

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
    title: post.title,
    description: post.excerpt || undefined,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt || undefined,
      type: 'article',
      publishedTime: post.publishedAt || undefined,
      images: cover?.url ? [{ url: cover.url }] : undefined,
    },
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

  const shareUrl = `${ORIGIN}/blog/${post.slug}`
  const shareX = `https://x.com/intent/post?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`
  const shareLinkedIn = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`

  return (
    <>
      <section style={{ padding: '80px 56px 40px', borderBottom: '1px solid var(--gf-rule)' }}>
        <MonoLabel accent>BLOG · {category ? category.title.toUpperCase() : 'FIELD NOTES'}</MonoLabel>
        <h1
          style={{
            fontFamily: 'var(--ff-display)',
            fontSize: 'clamp(40px, 6.5vw, 72px)',
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

      <div className="post-layout">
        <aside className="post-rail" aria-label="Post details">
          <div className="post-rail__row">
            <span className="post-rail__label">WRITTEN BY</span>
            <span className="post-rail__value">{post.author || 'Grepfox Team'}</span>
          </div>
          <div className="post-rail__row">
            <span className="post-rail__label">PUBLISHED</span>
            <span className="post-rail__value">{formatPostDate(post.publishedAt)}</span>
          </div>
          <div className="post-rail__row">
            <span className="post-rail__label">READ TIME</span>
            <span className="post-rail__value">{readingTime(post.body)} MIN</span>
          </div>
          {category && (
            <div className="post-rail__row">
              <span className="post-rail__label">FILED UNDER</span>
              <span className="post-rail__value">
                <Link href={`/blog/category/${category.slug}`}>{category.title}</Link>
              </span>
            </div>
          )}
          <div className="post-rail__row">
            <span className="post-rail__label">SHARE</span>
            <span className="post-rail__share">
              <a href={shareX} target="_blank" rel="noreferrer" aria-label="Share on X">
                <Icon name="x-social" size={13} /> X
              </a>
              <a href={shareLinkedIn} target="_blank" rel="noreferrer" aria-label="Share on LinkedIn">
                <Icon name="linkedin" size={13} /> LINKEDIN
              </a>
            </span>
          </div>
        </aside>

        <article>
          {post.body && <RichText data={post.body} className="richtext richtext--article" />}
        </article>
      </div>

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

      <NewsletterBand />

      <CTABanner
        accent={false}
        eyebrow="NEXT STEP"
        title="GOT A PROJECT IN MIND?"
        action={{ link: { type: 'external', url: '/contact', label: 'START A CONVERSATION' } }}
      />
    </>
  )
}

export const dynamic = 'force-static'
export const dynamicParams = false
