import { Button } from '@/components/ds/Button'
import { Media, type MediaRef } from '@/components/ds/Media'
import { resolveLinkHref, type LinkValue } from '@/fields/link'
import type { IconName } from '@/components/ds/Icon'

type Action = {
  link?: LinkValue
  icon?: IconName
  iconLeading?: boolean
  id?: string
}

type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
  actions?: Action[]
  image?: MediaRef
  imageUrl?: string
  imageCaption?: string
}

export function HeroSplit({ eyebrow, title, subtitle, actions, image, imageUrl, imageCaption }: Props) {
  return (
    <div className="block-spacer">
      <div className="hero-split">
        <div className="hero-split__content">
          {eyebrow && <div className="mono-label mono-label--accent">{eyebrow}</div>}
          <div>
            <div className="hero-split__title">{title}</div>
            {subtitle && <div className="hero-split__sub">{subtitle}</div>}
          </div>
          {actions && actions.length > 0 && (
            <div className="hero-split__actions">
              {actions.map((a, i) => {
                if (!a.link) return null
                const icon: IconName | undefined = a.icon ?? (i === 0 ? 'arrow-right' : undefined)
                return (
                  <Button
                    key={a.id || i}
                    href={resolveLinkHref(a.link)}
                    appearance={a.link.appearance || (i === 0 ? 'primary' : 'outline')}
                    icon={a.iconLeading ? icon : undefined}
                    iconTrailing={a.iconLeading ? undefined : icon}
                    newTab={a.link.newTab}
                    style={{ height: 56 }}
                  >
                    {a.link.label}
                  </Button>
                )
              })}
            </div>
          )}
        </div>
        <div className="hero-split__image">
          <Media
            media={image}
            src={imageUrl}
            size="hero"
            filtered
            style={{ position: 'absolute', inset: 0, height: '100%' }}
          />
          <div style={{ position: 'absolute', top: 24, right: 24 }}>
            <div className="crosshair crosshair--tl" />
            <div className="crosshair crosshair--tr" />
            <div className="crosshair crosshair--bl" />
            <div className="crosshair crosshair--br" />
          </div>
          {imageCaption && (
            <div
              style={{
                position: 'absolute',
                bottom: 24,
                right: 24,
                fontFamily: 'var(--ff-mono)',
                fontSize: 11,
                color: 'var(--gf-bone)',
                letterSpacing: '0.14em',
                background: 'var(--gf-void)',
                padding: '6px 10px',
              }}
            >
              {imageCaption}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
