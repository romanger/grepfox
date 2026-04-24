import { Media, type MediaRef } from '@/components/ds/Media'

type Props = {
  eyebrow?: string
  title: string
  description?: string
  footnote?: string
  image?: MediaRef
  imageUrl?: string
}

export function AccentBlock({ eyebrow, title, description, footnote, image, imageUrl }: Props) {
  return (
    <section className="block-spacer">
      <div className="accent-block">
        <div className="accent-block__content">
          {eyebrow && <p className="mono-label mono-label--dark">{eyebrow}</p>}
          <div className="accent-block__body">
            <h2 className="accent-block__title">
              {title.split('\n').map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h2>
            {description && <p className="accent-block__desc">{description}</p>}
          </div>
          {footnote && <p className="accent-block__footnote">{footnote}</p>}
        </div>
        <figure className="accent-block__image">
          <Media media={image} src={imageUrl} size="hero" filtered />
        </figure>
      </div>
    </section>
  )
}
