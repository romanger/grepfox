import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import { MonoLabel } from '@/components/ds/MonoLabel'
import { PostCard } from '@/components/site/PostCard'
import { NewsletterBand } from '@/components/site/NewsletterBand'

const PER_PAGE = 9

const PUBLISHED = { _status: { equals: 'published' } }

const baseHref = (categorySlug: string | null): string =>
  categorySlug ? `/blog/category/${categorySlug}` : '/blog'

const pageHref = (categorySlug: string | null, page: number): string =>
  page > 1 ? `${baseHref(categorySlug)}?page=${page}` : baseHref(categorySlug)

type Props = {
  categorySlug?: string
  page: number
}

export async function BlogListing({ categorySlug, page }: Props) {
  const payload = await getPayload({ config })

  const { docs: categories } = await payload.find({
    collection: 'categories',
    limit: 50,
    sort: 'title',
  })
  const activeCategory = categorySlug ? categories.find((c) => c.slug === categorySlug) : undefined
  if (categorySlug && !activeCategory) notFound()

  const [{ totalDocs: totalPublished }, ...categoryCounts] = await Promise.all([
    payload.count({ collection: 'posts', where: PUBLISHED as any }),
    ...categories.map((c) =>
      payload.count({
        collection: 'posts',
        where: { and: [PUBLISHED, { category: { equals: c.id } }] } as any,
      }),
    ),
  ])

  const where: Record<string, unknown> = { ...PUBLISHED }
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
  const indexBase = (page - 1) * PER_PAGE + (showFeatured ? 2 : 1)

  return (
    <>
      <section style={{ padding: '80px 56px 40px', borderBottom: '1px solid var(--gf-rule)' }}>
        <MonoLabel accent>
          {activeCategory ? `BLOG · ${activeCategory.title.toUpperCase()}` : 'BLOG · NOTES FROM THE CREW'}
        </MonoLabel>
        <h1
          style={{
            fontFamily: 'var(--ff-display)',
            fontSize: 'clamp(52px, 9vw, 96px)',
            fontWeight: 700,
            letterSpacing: '-0.05em',
            lineHeight: 0.9,
            marginTop: 16,
          }}
        >
          {activeCategory ? `${activeCategory.title.toUpperCase()}.` : 'FIELD NOTES.'}
        </h1>
        <p style={{ marginTop: 24, fontSize: 20, color: 'var(--gf-bone-dim)', maxWidth: 760, lineHeight: 1.5 }}>
          Engineering notes on AI agents, automation and the systems behind them — what works in
          production, what breaks, and what we would build differently.
        </p>
      </section>

      <nav className="tabs" style={{ padding: '0 56px' }} aria-label="Blog categories">
        <Link href="/blog" className={activeCategory ? 'tab' : 'tab tab--active'}>
          ALL <sup className="tab__count">{totalPublished}</sup>
        </Link>
        {categories.map((c, i) => (
          <Link
            key={c.id}
            href={baseHref(c.slug)}
            className={activeCategory?.id === c.id ? 'tab tab--active' : 'tab'}
          >
            {c.title.toUpperCase()} <sup className="tab__count">{categoryCounts[i].totalDocs}</sup>
          </Link>
        ))}
      </nav>

      <div className="block-pad">
        {featured && (
          <div style={{ marginBottom: 48 }}>
            <PostCard post={featured} featured index={1} />
          </div>
        )}

        {gridPosts.length > 0 ? (
          <div className="post-grid-frame">
            <div className="post-grid">
              {gridPosts.map((post, i) => (
                <PostCard key={post.id} post={post} index={indexBase + i} />
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

      <NewsletterBand />
    </>
  )
}
