import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

export function CodeBlock({ children, className }: Props) {
  return (
    <div className={['code-block', className].filter(Boolean).join(' ')}>
      <div className="code-block__editor">
        <div className="code-block__dots">
          <span className="code-block__dot" />
          <span className="code-block__dot" />
          <span className="code-block__dot" />
        </div>
      </div>
      <pre className="code-block__pre">{children}</pre>
    </div>
  )
}
