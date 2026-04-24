'use client'

import { useEffect } from 'react'

export default function FrontendError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="block-pad--wide">
      <div className="mono-label mono-label--accent">Error</div>
      <h1
        className="page-header__title"
        style={{ fontSize: 96, marginTop: 16 }}
      >
        Something broke.
      </h1>
      <p style={{ color: 'var(--gf-subtle)', marginTop: 16, maxWidth: 520 }}>
        {error.message || 'An unexpected error occurred while rendering this page.'}
      </p>
      <button
        className="btn btn--primary"
        onClick={reset}
        style={{ marginTop: 24 }}
      >
        Try again
      </button>
    </div>
  )
}
