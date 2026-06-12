import Link from 'next/link'
import { Media } from '@/components/ds/Media'
import { readingTime } from '@/utils/readingTime'
import { formatPostDate } from '@/utils/formatPostDate'
import type { Post } from '@/payload-types'

type Props = {
  post: Post
  featured?: boolean
}

export function PostCard({ post, featured = false }: Props) {
  const category = typeof post.category === 'object' && post.category ? post.category : null
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={featured ? 'post-card post-card--featured' : 'post-card'}
    >
      <div className="post-card__media">
        <Media
          media={post.cover}
          src={post.coverUrl}
          size={featured ? 'hero' : 'card'}
          filtered
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        />
      </div>
      <div className="post-card__body">
        <div className="post-card__meta mono-label">
          {category && <span className="post-card__category">{category.title}</span>}
          <span>{formatPostDate(post.publishedAt)}</span>
          <span>{readingTime(post.body)} MIN READ</span>
        </div>
        <h3 className="post-card__title">{post.title}</h3>
        {post.excerpt && <p className="post-card__excerpt">{post.excerpt}</p>}
      </div>
    </Link>
  )
}
