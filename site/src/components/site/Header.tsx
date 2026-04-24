import Link from 'next/link'
import { headers } from 'next/headers'
import { getPayload } from 'payload'
import config from '@payload-config'
import { LogoLockup } from '@/components/ds/LogoMark'
import { Icon, type IconName } from '@/components/ds/Icon'
import { resolveLinkHref, type LinkValue } from '@/fields/link'

export async function Header() {
  await headers()
  const payload = await getPayload({ config })
  const data = await payload.findGlobal({ slug: 'header', depth: 2 }).catch(() => null)

  const nav = (data?.nav as { link?: LinkValue; icon?: IconName }[]) || []
  const cta = data?.cta as { link?: LinkValue } | undefined

  return (
    <header className="top-nav">
      <Link href="/" aria-label="Grepfox home" className="top-nav__brand">
        <LogoLockup size={20} variant="badge" />
      </Link>
      <nav className="top-nav__links" aria-label="Primary">
        {nav.map((item, i) =>
          item.link ? (
            <Link
              key={i}
              href={resolveLinkHref(item.link)}
              className="top-nav__link"
              target={item.link.newTab ? '_blank' : undefined}
            >
              {item.icon && <Icon name={item.icon} size={13} />}
              {item.link.label}
            </Link>
          ) : null,
        )}
      </nav>
      {cta?.link && (
        <Link href={resolveLinkHref(cta.link)} className="btn btn--primary btn--sm">
          {cta.link.label}
          <Icon name="arrow-right" size={13} />
        </Link>
      )}
    </header>
  )
}
