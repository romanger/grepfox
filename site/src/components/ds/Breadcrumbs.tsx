import Link from 'next/link'
import { Fragment, type ReactNode } from 'react'

export type Crumb = {
  label: ReactNode
  href?: string
}

type Props = {
  items: Crumb[]
  className?: string
}

export function Breadcrumbs({ items, className }: Props) {
  return (
    <nav className={['breadcrumbs', className].filter(Boolean).join(' ')} aria-label="Breadcrumb">
      {items.map((c, i) => {
        const isLast = i === items.length - 1
        return (
          <Fragment key={i}>
            {i > 0 && <span className="breadcrumbs__sep">/</span>}
            {c.href && !isLast ? (
              <Link href={c.href}>{c.label}</Link>
            ) : (
              <span className="breadcrumbs__current">{c.label}</span>
            )}
          </Fragment>
        )
      })}
    </nav>
  )
}
