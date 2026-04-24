import type { HTMLAttributes, ReactNode } from 'react'
import { Icon, type IconName } from './Icon'

type Variant = 'info' | 'warn' | 'error' | 'ok'

const ICON_BY_VARIANT: Record<Variant, IconName> = {
  info: 'info',
  warn: 'alert',
  error: 'alert',
  ok: 'check',
}

type Props = HTMLAttributes<HTMLDivElement> & {
  variant?: Variant
  title?: ReactNode
  children: ReactNode
}

export function Alert({ variant = 'info', title, className = '', children, ...rest }: Props) {
  return (
    <div className={['alert', `alert--${variant}`, className].filter(Boolean).join(' ')} {...rest}>
      <Icon name={ICON_BY_VARIANT[variant]} size={18} className="alert__icon" />
      <div className="alert__body">
        {title && <div className="alert__title">{title}</div>}
        <div className="alert__msg">{children}</div>
      </div>
    </div>
  )
}
