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
    <section className="block-spacer">
      <div className="hero-split">
        <div className="hero-split__content">
          {eyebrow && <p className="mono-label mono-label--accent">{eyebrow}</p>}
          <div className="hero-split__heading">
            <h1 className="hero-split__title">{title}</h1>
            {subtitle && <p className="hero-split__sub">{subtitle}</p>}
          </div>
          {actions && actions.length > 0 && (
            <div className="hero-split__actions" role="group" aria-label="Hero actions">
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
                    className="hero-split__btn"
                  >
                    {a.link.label}
                  </Button>
                )
              })}
            </div>
          )}
        </div>
        <figure className="hero-split__image">
          <Media media={image} src={imageUrl} size="hero" filtered />
          <div className="hero-split__crosshairs" aria-hidden="true">
            <div className="crosshair crosshair--tl" />
            <div className="crosshair crosshair--tr" />
            <div className="crosshair crosshair--bl" />
            <div className="crosshair crosshair--br" />
          </div>
          {imageCaption && <figcaption className="hero-split__caption">{imageCaption}</figcaption>}
        </figure>
      </div>
    </section>
  )
}
