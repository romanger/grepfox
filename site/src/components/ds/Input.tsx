import type { InputHTMLAttributes } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean
}

export function Input({ error, className = '', ...rest }: Props) {
  const cls = ['input', error ? 'input--error' : '', className].filter(Boolean).join(' ')
  return <input className={cls} {...rest} />
}
