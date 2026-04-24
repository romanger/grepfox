import type { HTMLAttributes, ReactNode } from 'react'

type Variant = 'default' | 'accent' | 'ok' | 'warn' | 'info'

type Props = HTMLAttributes<HTMLSpanElement> & {
  variant?: Variant
  children: ReactNode
}

export function Badge({ variant = 'default', className = '', children, ...rest }: Props) {
  const cls = [
    'badge',
    variant !== 'default' ? `badge--${variant}` : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')
  return (
    <span className={cls} {...rest}>
      {children}
    </span>
  )
}
