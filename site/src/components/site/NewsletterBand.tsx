import { Icon, type IconName } from '@/components/ds/Icon'
import { MonoLabel } from '@/components/ds/MonoLabel'
import { NewsletterForm } from './NewsletterForm'

const SOCIALS: { name: IconName; href: string; label: string }[] = [
  { name: 'linkedin', href: 'https://www.linkedin.com/company/grepfox', label: 'LinkedIn' },
  { name: 'x-social', href: 'https://x.com/grepfox', label: 'X' },
  { name: 'instagram', href: 'https://www.instagram.com/grepfox', label: 'Instagram' },
]

export function NewsletterBand() {
  return (
    <aside className="newsletter-band block-spacer" aria-label="Newsletter">
      <div className="newsletter-band__inner">
        <div className="newsletter-band__pitch">
          <MonoLabel accent>FIELD NOTES — DELIVERED</MonoLabel>
          <h2 className="newsletter-band__title">ONE EMAIL PER POST. NO NOISE.</h2>
          <p className="newsletter-band__sub">
            Engineering notes straight from the crew. Unsubscribe any time.
          </p>
        </div>
        <div className="newsletter-band__action">
          <NewsletterForm />
          <div className="newsletter-band__social">
            <span className="newsletter-band__social-label">FOLLOW</span>
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                <Icon name={s.name} size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
