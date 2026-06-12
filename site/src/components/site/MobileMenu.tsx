'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon } from '@/components/ds/Icon'
import type { NavItem } from '@/components/site/NavLinks'

type Props = { items: NavItem[]; cta?: { href: string; label: string } }

export function MobileMenu({ items, cta }: Props) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <button
        type="button"
        className="top-nav__burger"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((v) => !v)}
      >
        <Icon name={open ? 'x' : 'menu'} size={18} />
      </button>
      <div
        id="mobile-menu"
        className={`mobile-menu${open ? ' mobile-menu--open' : ''}`}
        aria-hidden={!open}
      >
        <div className="mobile-menu__clip">
          <nav className="mobile-menu__list" aria-label="Mobile">
            {items.map((item, i) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
              return (
                <Link
                  key={i}
                  href={item.href}
                  className={`mobile-menu__link${active ? ' mobile-menu__link--active' : ''}`}
                  aria-current={active ? 'page' : undefined}
                  target={item.newTab ? '_blank' : undefined}
                >
                  {item.icon && <Icon name={item.icon} size={16} />}
                  {item.label}
                </Link>
              )
            })}
            {cta && (
              <Link href={cta.href} className="btn btn--primary mobile-menu__cta">
                {cta.label}
                <Icon name="arrow-right" size={14} />
              </Link>
            )}
          </nav>
        </div>
      </div>
    </>
  )
}
