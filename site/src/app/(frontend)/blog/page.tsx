import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { MonoLabel } from '@/components/ds/MonoLabel'
import { PostCard } from '@/components/site/PostCard'

const PER_PAGE = 9

export const metadata: Metadata = {
  title: 'Blog — Grepfox',
  description:
    'Engineering notes on AI agents, automation and the systems behind them — written by the crew that ships them.',
}

type Search = { category?: string; page?: string }

const pageHref = (categorySlug: string | null, page: number): string => {
  const q = new URLSearchParams()
  if (categorySlug) q.set('category', categorySlug)
  if (page > 1) q.set('page', String(page))
  const s = q.toString()
  return s ? `/blog?${s}` : '/blog'
}

export default async function BlogPage({ searchParams }: { searchParams: Promise<Search> }) {
  const { category: categoryParam, page: pageParam } = await searchParams
  const page = Math.max(1, parseInt(pageParam || '1', 10) || 1)
  const payload = await getPayload({ config })

  const { docs: categories } = await payload.find({
    collection: 'categories',
    limit: 50,
    sort: 'title',
  })
  const activeCategory = categoryParam
    ? categories.find((c) => c.slug === categoryParam)
    : undefined
  if (categoryParam && !activeCategory) notFound()

  const where: Record<string, unknown> = { _status: { equals: 'published' } }
  if (activeCategory) where.category = { equals: activeCategory.id }

  const result = await payload.find({
    collection: 'posts',
    where: where as any,
    sort: '-publishedAt',
    limit: PER_PAGE,
    page,
    depth: 1,
  })
  if (page > 1 && result.docs.length === 0) notFound()

  const showFeatured = !activeCategory && page === 1 && result.docs.length > 0
  const featured = showFeatured ? result.docs[0] : null
  const gridPosts = showFeatured ? result.docs.slice(1) : result.docs

  return (
    <>
      <section style={{ padding: '80px 56px 40px', borderBottom: '1px solid var(--gf-rule)' }}>
        <MonoLabel accent>BLOG · NOTES FROM THE CREW</MonoLabel>
        <h1
          style={{
            fontFamily: 'var(--ff-display)',
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: '-0.05em',
            lineHeight: 0.9,
            marginTop: 16,
          }}
        >
          FIELD NOTES.
        </h1>
        <p style={{ marginTop: 24, fontSize: 20, color: 'var(--gf-bone-dim)', maxWidth: 760, lineHeight: 1.5 }}>
          Engineering notes on AI agents, automation and the systems behind them — what works in
          production, what breaks, and what we would build differently.
        </p>
      </section>

      <nav className="tabs" style={{ padding: '0 56px' }} aria-label="Blog categories">
        <Link href="/blog" className={activeCategory ? 'tab' : 'tab tab--active'}>
          ALL
        </Link>
        {categories.map((c) => (
          <Link
            key={c.id}
            href={pageHref(c.slug, 1)}
            className={activeCategory?.id === c.id ? 'tab tab--active' : 'tab'}
          >
            {c.title.toUpperCase()}
          </Link>
        ))}
      </nav>

      <div className="block-pad">
        {featured && (
          <div style={{ marginBottom: 48 }}>
            <PostCard post={featured} featured />
          </div>
        )}

        {gridPosts.length > 0 ? (
          <div className="post-grid-frame">
            <div className="post-grid">
              {gridPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        ) : (
          !featured && (
            <p className="mono-label" style={{ padding: '48px 0' }}>
              NO POSTS IN THIS CATEGORY YET.
            </p>
          )
        )}

        {result.totalPages > 1 && (
          <nav className="blog-pagination" style={{ marginTop: 48 }} aria-label="Pagination">
            {result.hasPrevPage && (
              <Link className="blog-pagination__link" href={pageHref(activeCategory?.slug ?? null, page - 1)}>
                ← PREV
              </Link>
            )}
            {Array.from({ length: result.totalPages }, (_, i) => i + 1).map((n) => (
              <Link
                key={n}
                className={
                  n === page ? 'blog-pagination__link blog-pagination__link--active' : 'blog-pagination__link'
                }
                href={pageHref(activeCategory?.slug ?? null, n)}
              >
                {n}
              </Link>
            ))}
            {result.hasNextPage && (
              <Link className="blog-pagination__link" href={pageHref(activeCategory?.slug ?? null, page + 1)}>
                NEXT →
              </Link>
            )}
          </nav>
        )}
      </div>
    </>
  )
}

export const revalidate = 60
