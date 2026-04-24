import type { HTMLAttributes, ReactNode } from 'react'
import { MonoLabel } from './MonoLabel'

type Props = HTMLAttributes<HTMLDivElement> & {
  label?: ReactNode
  hint?: ReactNode
  error?: boolean
  children: ReactNode
}

export function InputGroup({ label, hint, error, className = '', children, ...rest }: Props) {
  return (
    <div className={['input-group', className].filter(Boolean).join(' ')} {...rest}>
      {label && <MonoLabel className="input-group__label">{label}</MonoLabel>}
      {children}
      {hint && (
        <div className={`input-group__hint${error ? ' input-group__hint--error' : ''}`}>{hint}</div>
      )}
    </div>
  )
}
