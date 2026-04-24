import type { SelectHTMLAttributes, ReactNode } from 'react'
import { Icon } from './Icon'

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  children: ReactNode
}

export function Select({ className = '', children, ...rest }: Props) {
  return (
    <div className="select-wrap">
      <select className={['input', className].filter(Boolean).join(' ')} {...rest}>
        {children}
      </select>
      <Icon name="chevron-down" size={16} className="select-wrap__icon" />
    </div>
  )
}
