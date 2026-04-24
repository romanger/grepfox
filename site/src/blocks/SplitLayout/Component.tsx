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
    <div className="split-layout__image">
      <Media media={image} src={imageUrl} size="hero" filtered />
    </div>
  )

  const contentEl = (
    <div
      className="split-layout__content"
      style={
        imageSide === 'left'
          ? { borderLeft: '1px solid var(--gf-rule)' }
          : { borderRight: '1px solid var(--gf-rule)' }
      }
    >
      {eyebrow && <div className="mono-label mono-label--accent">{eyebrow}</div>}
      <div className="split-layout__title">{title}</div>
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
    <div className="block-spacer">
      <div className="split-layout">
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
    </div>
  )
}
