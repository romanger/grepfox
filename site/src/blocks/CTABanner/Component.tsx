import Link from 'next/link'
import { Icon, type IconName } from '@/components/ds/Icon'
import { resolveLinkHref, type LinkValue } from '@/fields/link'

type Contact = { icon?: IconName; value: string; id?: string }

type Props = {
  accent?: boolean
  eyebrow?: string
  title: string
  action?: { link?: LinkValue }
  contacts?: Contact[]
}

export function CTABanner({ accent = true, eyebrow, title, action, contacts }: Props) {
  const wrapperClass = accent ? 'cta-banner' : 'cta-banner cta-banner--dark'
  const eyebrowStyle = accent ? { color: 'var(--gf-void)' } : undefined
  return (
    <div className="block-spacer">
      <div className={wrapperClass}>
        <div className="cta-banner__inner">
          <div>
            {eyebrow && <div className="mono-label" style={eyebrowStyle}>{eyebrow}</div>}
            <div className="cta-banner__title">{title}</div>
          </div>
          {action?.link && (
            <Link href={resolveLinkHref(action.link)} className="cta-banner__btn">
              {action.link.label}
              <Icon name="arrow-right" size={18} />
            </Link>
          )}
        </div>
        {contacts && contacts.length > 0 && (
          <div className="cta-banner__contacts">
            {contacts.map((c, i) => (
              <span key={c.id || i} className="cta-banner__contact">
                {c.icon && <Icon name={c.icon} size={13} />}
                {c.value}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
