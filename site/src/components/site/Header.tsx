import Link from 'next/link'
import { headers } from 'next/headers'
import { getPayload } from 'payload'
import config from '@payload-config'
import { LogoLockup } from '@/components/ds/LogoMark'
import { Icon, type IconName } from '@/components/ds/Icon'
import { NavLinks, type NavItem } from '@/components/site/NavLinks'
import { resolveLinkHref, type LinkValue } from '@/fields/link'

export async function Header() {
  await headers()
  const payload = await getPayload({ config })
  const data = await payload.findGlobal({ slug: 'header', depth: 2 }).catch(() => null)

  const nav = (data?.nav as { link?: LinkValue; icon?: IconName }[]) || []
  const cta = data?.cta as { link?: LinkValue } | undefined

  const navItems: NavItem[] = nav
    .filter((item) => item.link)
    .map((item) => ({
      href: resolveLinkHref(item.link!),
      label: item.link!.label || '',
      icon: item.icon,
      newTab: item.link!.newTab || undefined,
    }))

  return (
    <header className="top-nav">
      <Link href="/" aria-label="Grepfox home" className="top-nav__brand">
        <LogoLockup size={20} variant="badge" />
      </Link>
      <NavLinks items={navItems} />
      {cta?.link && (
        <Link href={resolveLinkHref(cta.link)} className="btn btn--primary btn--sm">
          {cta.link.label}
          <Icon name="arrow-right" size={13} />
        </Link>
      )}
    </header>
  )
}
