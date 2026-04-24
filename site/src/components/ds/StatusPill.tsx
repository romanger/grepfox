import type { HTMLAttributes, ReactNode } from 'react'

type Variant = 'ok' | 'warn' | 'info' | 'accent'

type Props = HTMLAttributes<HTMLSpanElement> & {
  variant?: Variant
  children: ReactNode
}

export function StatusPill({ variant = 'info', className = '', children, ...rest }: Props) {
  return (
    <span className={['status-pill', `status-pill--${variant}`, className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </span>
  )
}
