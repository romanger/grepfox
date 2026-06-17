import Link from 'next/link'
import { MonoLabel } from '@/components/ds/MonoLabel'
import { Icon } from '@/components/ds/Icon'
import { ContactForm } from '@/components/site/ContactForm'

type Props = {
  eyebrow?: string
  title?: string
  subtitle?: string
  asideEyebrow?: string
  asideTitle?: string
  asideText?: string
  callLabel?: string
  callUrl?: string
  accent?: boolean
}

export function ContactFormSection({
  eyebrow,
  title,
  subtitle,
  asideEyebrow,
  asideTitle,
  asideText,
  callLabel,
  callUrl,
  accent,
}: Props) {
  const hasAside = !!(asideTitle || asideText || (callUrl && callLabel))
  return (
    <section className={`block-spacer block-pad contact${accent ? ' contact--accent' : ''}`}>
      <div className="contact__head">
        {eyebrow && <MonoLabel accent>{eyebrow}</MonoLabel>}
        {title && <h2 className="contact__title">{title}</h2>}
        {subtitle && <p className="contact__subtitle">{subtitle}</p>}
      </div>
      <div className={hasAside ? 'contact__grid' : undefined}>
        <div className="contact__main">
          <ContactForm />
        </div>
        {hasAside && (
          <aside className="contact__aside">
            {asideEyebrow && <MonoLabel accent>{asideEyebrow}</MonoLabel>}
            {asideTitle && <h3 className="contact__aside-title">{asideTitle}</h3>}
            {callUrl && callLabel && (
              <Link
                href={callUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline contact__aside-cta"
              >
                {callLabel}
                <Icon name="arrow-right" size={16} />
              </Link>
            )}
            {asideText && <p className="contact__aside-text">{asideText}</p>}
          </aside>
        )}
      </div>
    </section>
  )
}
