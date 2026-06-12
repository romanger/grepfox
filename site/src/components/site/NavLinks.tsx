'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon, type IconName } from '@/components/ds/Icon'

export type NavItem = { href: string; label: string; icon?: IconName; newTab?: boolean }

export function NavLinks({ items }: { items: NavItem[] }) {
  const pathname = usePathname()
  return (
    <nav className="top-nav__links" aria-label="Primary">
      {items.map((item, i) => {
        const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
        return (
          <Link
            key={i}
            href={item.href}
            className={`top-nav__link${active ? ' top-nav__link--active' : ''}`}
            aria-current={active ? 'page' : undefined}
            target={item.newTab ? '_blank' : undefined}
          >
            {item.icon && <Icon name={item.icon} size={13} />}
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
