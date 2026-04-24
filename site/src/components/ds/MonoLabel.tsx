import type { HTMLAttributes, ReactNode } from 'react'

type Props = HTMLAttributes<HTMLDivElement> & {
  accent?: boolean
  children: ReactNode
}

export function MonoLabel({ accent, className = '', children, ...rest }: Props) {
  const cls = ['mono-label', accent ? 'mono-label--accent' : '', className].filter(Boolean).join(' ')
  return (
    <div className={cls} {...rest}>
      {children}
    </div>
  )
}
