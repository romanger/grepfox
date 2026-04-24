'use client'

import type { ReactNode } from 'react'

export type SegmentOption<T extends string = string> = {
  value: T
  label: ReactNode
}

type Props<T extends string> = {
  options: SegmentOption<T>[]
  value: T
  onChange: (next: T) => void
  className?: string
}

export function Segments<T extends string>({ options, value, onChange, className }: Props<T>) {
  return (
    <div className={['segments', className].filter(Boolean).join(' ')}>
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          className={`segment${opt.value === value ? ' segment--active' : ''}`}
          onClick={() => onChange(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
