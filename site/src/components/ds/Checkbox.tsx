'use client'

import type { InputHTMLAttributes, ReactNode } from 'react'
import { Icon } from './Icon'

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label?: ReactNode
}

export function Checkbox({ label, className = '', checked, ...rest }: Props) {
  return (
    <label className={['checkbox', className].filter(Boolean).join(' ')}>
      <input type="checkbox" checked={checked} {...rest} style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }} />
      <span className={`checkbox__box${checked ? ' checkbox__box--checked' : ''}`}>
        {checked && <Icon name="check" size={12} />}
      </span>
      {label && <span className="checkbox__label">{label}</span>}
    </label>
  )
}
