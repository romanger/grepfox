'use client'

import type { InputHTMLAttributes, ReactNode } from 'react'

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label?: ReactNode
}

export function Radio({ label, className = '', checked, ...rest }: Props) {
  return (
    <label className={['radio', className].filter(Boolean).join(' ')}>
      <input type="radio" checked={checked} {...rest} style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }} />
      <span className={`radio__dot${checked ? ' radio__dot--checked' : ''}`}>
        {checked && <span className="radio__dot-inner" />}
      </span>
      {label && <span className="radio__label">{label}</span>}
    </label>
  )
}
