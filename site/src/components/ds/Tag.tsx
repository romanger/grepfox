import type { HTMLAttributes, ReactNode } from 'react'

type Props = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode
}

export function Tag({ className = '', children, ...rest }: Props) {
  return (
    <span className={['tag', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </span>
  )
}
