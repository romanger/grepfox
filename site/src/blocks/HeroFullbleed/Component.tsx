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
        <Media
          media={background}
          src={backgroundUrl}
          size="hero"
          filtered
          style={{ position: 'absolute', inset: 0, height: '100%' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, transparent 0%, rgba(10,10,10,0.8) 80%, var(--gf-void) 100%)',
          }}
        />
        <div className="hero-fullbleed__content">
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
            {eyebrow && <div className="mono-label" style={{ color: 'var(--gf-bone)' }}>{eyebrow}</div>}
            {meta && <div className="mono-label" style={{ color: 'var(--gf-bone)' }}>{meta}</div>}
          </div>
          <div>
            {statValue && <div className="hero-fullbleed__stat">{statValue}</div>}
            <div className="hero-fullbleed__desc">{description}</div>
            {tags && tags.length > 0 && (
              <div style={{ display: 'flex', gap: 10, marginTop: 24, flexWrap: 'wrap' }}>
                {tags.map((t, i) => (
                  <div
                    key={t.id || i}
                    className="tag"
                    style={{ borderColor: 'var(--gf-bone)', color: 'var(--gf-bone)', padding: '6px 12px' }}
                  >
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
