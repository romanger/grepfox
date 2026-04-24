import { Button } from '@/components/ds/Button'
import { Media, type MediaRef } from '@/components/ds/Media'
import { RichText } from '@/utils/RichText'
import type { LinkValue } from '@/fields/link'
import { resolveLinkHref } from '@/fields/link'

type Props = {
  imageSide?: 'left' | 'right'
  eyebrow?: string
  title: string
  content?: unknown
  action?: { link?: LinkValue }
  image?: MediaRef
  imageUrl?: string
}

export function SplitLayout({ imageSide = 'right', eyebrow, title, content, action, image, imageUrl }: Props) {
  const imageEl = (
    <figure className="split-layout__image">
      <Media media={image} src={imageUrl} size="hero" filtered />
    </figure>
  )

  const contentEl = (
    <div className={`split-layout__content split-layout__content--${imageSide === 'left' ? 'image-left' : 'image-right'}`}>
      {eyebrow && <p className="mono-label mono-label--accent">{eyebrow}</p>}
      <h2 className="split-layout__title">{title}</h2>
      {content ? (
        <div className="split-layout__desc">
          <RichText data={content} />
        </div>
      ) : null}
      {action?.link && (
        <Button
          href={resolveLinkHref(action.link)}
          appearance={action.link.appearance || 'outline'}
          iconTrailing="arrow-right"
          newTab={action.link.newTab}
          className="split-layout__action"
        >
          {action.link.label}
        </Button>
      )}
    </div>
  )

  return (
    <section className="block-spacer">
      <div className={`split-layout${imageSide === 'left' ? ' split-layout--image-left' : ''}`}>
        {imageSide === 'left' ? (
          <>
            {imageEl}
            {contentEl}
          </>
        ) : (
          <>
            {contentEl}
            {imageEl}
          </>
        )}
      </div>
    </section>
  )
}
