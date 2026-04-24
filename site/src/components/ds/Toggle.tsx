'use client'

import type { ButtonHTMLAttributes } from 'react'

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onChange'> & {
  on: boolean
  onChange?: (next: boolean) => void
}

export function Toggle({ on, onChange, className = '', ...rest }: Props) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      className={['toggle', on ? 'toggle--on' : 'toggle--off', className].filter(Boolean).join(' ')}
      onClick={() => onChange?.(!on)}
      {...rest}
    >
      <span className="toggle__knob" />
    </button>
  )
}
