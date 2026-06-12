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
    <section className="block-spacer block-pad">
      <div className="feature-grid-frame">
        <ul className={`feature-grid feature-grid--${columns}col`} role="list">
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
            <article className="feature-card">
              {hasImage && (
                <figure className="feature-card__img">
                  <Media media={item.image} src={item.imageUrl} size="card" filtered />
                </figure>
              )}
              <div className="feature-card__body">
                <div>
                  <header className="feature-card__head">
                    <p className="mono-label mono-label--accent">{eyebrow}</p>
                    {href && (
                      <span className="feature-card__arrow" aria-hidden="true">
                        <Icon name="arrow-up-right" size={14} />
                      </span>
                    )}
                  </header>
                  <div className="feature-card__title-row">
                    {item.icon && (
                      <span className="feature-card__icon" aria-hidden="true">
                        <Icon name={item.icon} size={28} />
                      </span>
                    )}
                    <h3 className="feature-card__title">{item.title}</h3>
                  </div>
                  {item.description && <p className="feature-card__desc">{item.description}</p>}
                </div>
              </div>
            </article>
          )

          return (
            <li key={item.id || i} className="feature-grid__item">
              {href ? (
                <Link href={href} className="feature-card__link">
                  {card}
                </Link>
              ) : (
                card
              )}
            </li>
          )
        })}
        </ul>
      </div>
    </section>
  )
}
