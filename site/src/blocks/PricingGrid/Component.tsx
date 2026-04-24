import Link from 'next/link'
import { Icon } from '@/components/ds/Icon'
import { resolveLinkHref, type LinkValue } from '@/fields/link'

type Plan = {
  name: string
  price: string
  priceSub?: string
  hot?: boolean
  badge?: string
  features?: { text: string; id?: string }[]
  cta?: { link?: LinkValue }
  id?: string
}

export function PricingGrid({ plans }: { plans: Plan[] }) {
  const cols = Math.min(Math.max(plans.length, 2), 4) as 2 | 3 | 4
  return (
    <section className="block-spacer block-pad" aria-label="Pricing">
      <ul className={`pricing-grid pricing-grid--${cols}col`} role="list">
        {plans.map((p, i) => (
          <li key={p.id || i} className="pricing-grid__item">
            <article className={`pricing-card${p.hot ? ' pricing-card--hot' : ''}`}>
              {p.hot && p.badge && <p className="pricing-card__badge">{p.badge}</p>}
              <h3 className={`pricing-card__name mono-label${p.hot ? ' mono-label--accent' : ''}`}>{p.name}</h3>
              <p className="pricing-card__price">{p.price}</p>
              {p.priceSub && <p className="pricing-card__sub">{p.priceSub}</p>}
              {p.features && p.features.length > 0 && (
                <ul className="pricing-card__features">
                  {p.features.map((f, idx) => (
                    <li key={f.id || idx} className="pricing-card__feature">
                      <Icon name="check" size={14} stroke={2.5} />
                      <span>{f.text}</span>
                    </li>
                  ))}
                </ul>
              )}
              {p.cta?.link && (
                <Link href={resolveLinkHref(p.cta.link)} className="pricing-card__cta">
                  {p.cta.link.label}
                  <Icon name="arrow-right" size={14} />
                </Link>
              )}
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
