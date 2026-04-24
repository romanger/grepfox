import { Media, type MediaRef } from '@/components/ds/Media'

type Logo = { name: string; image?: MediaRef; id?: string }

type Props = { heading?: string; meta?: string; logos: Logo[] }

export function LogoWall({ heading = 'TRUSTED BY', meta, logos }: Props) {
  const cols = Math.min(Math.max(logos.length, 4), 6) as 4 | 5 | 6
  return (
    <div className="block-spacer block-pad">
      <div className="logo-wall">
        <div className="logo-wall__header">
          <div className="mono-label">{heading}</div>
          {meta && <div className="mono-label">{meta}</div>}
        </div>
        <div className={`logo-wall__grid logo-wall__grid--${cols}col`}>
          {logos.map((logo, i) => (
            <div key={logo.id || i} className="logo-wall__item">
              {logo.image ? (
                <Media
                  media={logo.image}
                  size="thumb"
                  alt={logo.name}
                  style={{ maxHeight: 40, filter: 'grayscale(1) brightness(0.9)' }}
                />
              ) : (
                logo.name
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
