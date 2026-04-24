import { Media, type MediaRef } from '@/components/ds/Media'

type Logo = { name: string; image?: MediaRef; id?: string }

type Props = { heading?: string; meta?: string; logos: Logo[] }

export function LogoWall({ heading = 'TRUSTED BY', meta, logos }: Props) {
  const cols = Math.min(Math.max(logos.length, 4), 6) as 4 | 5 | 6
  return (
    <section className="block-spacer block-pad" aria-label={heading}>
      <div className="logo-wall">
        <header className="logo-wall__header">
          <h2 className="mono-label">{heading}</h2>
          {meta && <p className="mono-label">{meta}</p>}
        </header>
        <ul className={`logo-wall__grid logo-wall__grid--${cols}col`} role="list">
          {logos.map((logo, i) => (
            <li key={logo.id || i} className="logo-wall__item">
              {logo.image ? (
                <Media media={logo.image} size="thumb" alt={logo.name} className="logo-wall__img" />
              ) : (
                logo.name
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
