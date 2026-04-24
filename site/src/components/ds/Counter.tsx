import type { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLSpanElement> & {
  value: number | string
}

export function Counter({ value, className = '', ...rest }: Props) {
  return (
    <span className={['counter', className].filter(Boolean).join(' ')} {...rest}>
      {value}
    </span>
  )
}
