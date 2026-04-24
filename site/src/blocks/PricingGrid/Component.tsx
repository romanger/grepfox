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
    <div className="block-spacer block-pad">
      <div className={`pricing-grid pricing-grid--${cols}col`}>
        {plans.map((p, i) => (
          <div key={p.id || i} className={`pricing-card${p.hot ? ' pricing-card--hot' : ''}`}>
            {p.hot && p.badge && <div className="pricing-card__badge">{p.badge}</div>}
            <div className={`mono-label${p.hot ? ' mono-label--accent' : ''}`}>{p.name}</div>
            <div className="pricing-card__price">{p.price}</div>
            {p.priceSub && <div className="pricing-card__sub">{p.priceSub}</div>}
            {p.features && p.features.length > 0 && (
              <div className="pricing-card__features">
                {p.features.map((f, idx) => (
                  <div key={f.id || idx} className="pricing-card__feature">
                    <Icon name="check" size={14} stroke={2.5} />
                    <span>{f.text}</span>
                  </div>
                ))}
              </div>
            )}
            {p.cta?.link && (
              <Link href={resolveLinkHref(p.cta.link)} className="pricing-card__cta">
                {p.cta.link.label}
                <Icon name="arrow-right" size={14} />
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
