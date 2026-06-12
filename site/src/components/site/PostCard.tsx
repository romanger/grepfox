import Link from 'next/link'
import { Icon } from '@/components/ds/Icon'
import { Media } from '@/components/ds/Media'
import { readingTime } from '@/utils/readingTime'
import { formatPostDate } from '@/utils/formatPostDate'
import type { Post } from '@/payload-types'

type Props = {
  post: Post
  featured?: boolean
  index?: number
}

export function PostCard({ post, featured = false, index }: Props) {
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
        {featured && <span className="post-card__flag">FEATURED</span>}
        {category && <span className="post-card__tag">{category.title.toUpperCase()}</span>}
      </div>
      <div className="post-card__body">
        <div className="post-card__top">
          <span className="post-card__index">
            {typeof index === 'number' ? String(index).padStart(2, '0') : '—'}
          </span>
          <Icon name="arrow-up-right" size={18} className="post-card__arrow" />
        </div>
        <h3 className="post-card__title">{post.title}</h3>
        {post.excerpt && <p className="post-card__excerpt">{post.excerpt}</p>}
        <div className="post-card__foot">
          <span>{formatPostDate(post.publishedAt)}</span>
          <span>{readingTime(post.body)} MIN READ</span>
        </div>
      </div>
    </Link>
  )
}
