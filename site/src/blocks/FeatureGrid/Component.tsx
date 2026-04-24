import Link from 'next/link'
import { Icon, type IconName } from '@/components/ds/Icon'
import { Media, type MediaRef } from '@/components/ds/Media'

type Item = {
  n?: string
  eyebrow?: string
  icon?: IconName
  image?: MediaRef
  imageUrl?: string
  title: string
  description?: string
  linkedService?: { slug?: string } | string | number | null
  id?: string
}

type Props = {
  columns?: '2' | '3' | '4'
  items: Item[]
}

export function FeatureGrid({ columns = '3', items }: Props) {
  return (
    <div className="block-spacer block-pad">
      <div className={`feature-grid feature-grid--${columns}col`}>
        {items.map((item, i) => {
          const serviceSlug =
            typeof item.linkedService === 'object' && item.linkedService
              ? item.linkedService.slug
              : null
          const href = serviceSlug ? `/services/${serviceSlug}` : null
          const hasImage = !!(item.image || item.imageUrl)
          const n = item.n ?? String(i + 1).padStart(2, '0')
          const eyebrow = item.eyebrow ?? `SERVICE / ${n}`

          const card = (
            <div className="feature-card">
              {hasImage && (
                <div className="feature-card__img">
                  <Media media={item.image} src={item.imageUrl} size="card" filtered />
                </div>
              )}
              <div className="feature-card__body">
                <div>
                  <div className="feature-card__head">
                    <div className="mono-label mono-label--accent">{eyebrow}</div>
                    {href && (
                      <div style={{ color: 'var(--gf-bone)' }}>
                        <Icon name="arrow-up-right" size={14} />
                      </div>
                    )}
                  </div>
                  <div className="feature-card__title-row">
                    {item.icon && (
                      <div style={{ color: 'var(--gf-accent)' }}>
                        <Icon name={item.icon} size={28} />
                      </div>
                    )}
                    <div className="feature-card__title">{item.title}</div>
                  </div>
                  {item.description && <div className="feature-card__desc">{item.description}</div>}
                </div>
              </div>
            </div>
          )

          return href ? (
            <Link key={item.id || i} href={href} className="feature-card__link">
              {card}
            </Link>
          ) : (
            <div key={item.id || i}>{card}</div>
          )
        })}
      </div>
    </div>
  )
}
