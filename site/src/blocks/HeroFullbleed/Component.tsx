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
    <div className="block-spacer">
      <div className="hero-fullbleed">
        <Media media={background} src={backgroundUrl} size="hero" filtered />
        <div className="hero-fullbleed__overlay" />
        <div className="hero-fullbleed__content">
          <div className="hero-fullbleed__meta">
            {eyebrow && <div className="mono-label mono-label--light">{eyebrow}</div>}
            {meta && <div className="mono-label mono-label--light">{meta}</div>}
          </div>
          <div>
            {statValue && <div className="hero-fullbleed__stat">{statValue}</div>}
            <div className="hero-fullbleed__desc">{description}</div>
            {tags && tags.length > 0 && (
              <div className="hero-fullbleed__tags">
                {tags.map((t, i) => (
                  <div key={t.id || i} className="tag tag--light">
                    {t.icon && <Icon name={t.icon} size={12} />}
                    {t.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
