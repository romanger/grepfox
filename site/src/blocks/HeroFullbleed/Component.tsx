import { Icon, type IconName } from '@/components/ds/Icon'
import { Media, type MediaRef } from '@/components/ds/Media'

type TagItem = { icon?: IconName; label: string; id?: string }

type Props = {
  eyebrow?: string
  meta?: string
  statValue?: string
  description: string
  background?: MediaRef
  backgroundUrl?: string
  tags?: TagItem[]
}

export function HeroFullbleed({
  eyebrow,
  meta,
  statValue,
  description,
  background,
  backgroundUrl,
  tags,
}: Props) {
  return (
    <section className="block-spacer">
      <div className="hero-fullbleed">
        <Media media={background} src={backgroundUrl} size="hero" filtered />
        <div className="hero-fullbleed__overlay" aria-hidden="true" />
        <div className="hero-fullbleed__content">
          <div className="hero-fullbleed__meta">
            {eyebrow && <p className="mono-label mono-label--light">{eyebrow}</p>}
            {meta && <p className="mono-label mono-label--light">{meta}</p>}
          </div>
          <div className="hero-fullbleed__body">
            {statValue && <p className="hero-fullbleed__stat">{statValue}</p>}
            <h1 className="hero-fullbleed__desc">{description}</h1>
            {tags && tags.length > 0 && (
              <ul className="hero-fullbleed__tags" role="list">
                {tags.map((t, i) => (
                  <li key={t.id || i} className="tag tag--light">
                    {t.icon && <Icon name={t.icon} size={12} />}
                    {t.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
