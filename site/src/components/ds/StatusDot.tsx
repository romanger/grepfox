import type { HTMLAttributes, ReactNode } from 'react'

type Variant = 'ok' | 'warn' | 'info' | 'accent' | 'dim'

type Props = HTMLAttributes<HTMLSpanElement> & {
  variant?: Variant
  children?: ReactNode
}

export function StatusDot({ variant = 'ok', className = '', children, ...rest }: Props) {
  return (
    <span className={['status-dot', className].filter(Boolean).join(' ')} {...rest}>
      <span className={`status-dot__dot status-dot__dot--${variant}`} />
      {children}
    </span>
  )
}
