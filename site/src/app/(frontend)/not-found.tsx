import Link from 'next/link'

export default function FrontendNotFound() {
  return (
    <div className="block-pad--wide">
      <div className="mono-label mono-label--accent">404</div>
      <h1
        className="page-header__title"
        style={{ fontSize: 96, marginTop: 16 }}
      >
        Not found.
      </h1>
      <p style={{ color: 'var(--gf-subtle)', marginTop: 16, maxWidth: 520 }}>
        The page you're looking for doesn't exist or was moved.
      </p>
      <Link
        href="/"
        className="btn btn--primary"
        style={{ marginTop: 24, display: 'inline-flex' }}
      >
        Back to home
      </Link>
    </div>
  )
}
