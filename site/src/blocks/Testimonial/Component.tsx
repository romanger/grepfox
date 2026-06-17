import { MonoLabel } from '@/components/ds/MonoLabel'
import { Media, type MediaRef } from '@/components/ds/Media'

type Props = {
  eyebrow?: string
  quote: string
  name?: string
  role?: string
  image?: MediaRef
  imageUrl?: string
}

export function Testimonial({ eyebrow = 'TESTIMONIAL', quote, name, role, image, imageUrl }: Props) {
  const hasImage = !!(image || imageUrl)
  const cls = hasImage ? 'testimonial' : 'testimonial testimonial--stacked'
  return (
    <section className="block-spacer block-pad">
      <figure className={cls}>
        {hasImage && (
          <div className="testimonial__image">
            <Media media={image} src={imageUrl} size="card" filtered />
          </div>
        )}
        <div className="testimonial__content">
          <MonoLabel accent>{eyebrow}</MonoLabel>
          <blockquote className="testimonial__quote" cite={name}>
            <p>{name ? `“${quote}”` : quote}</p>
          </blockquote>
          {name && (
            <figcaption className="testimonial__caption">
              <p className="testimonial__name">{name}</p>
              {role && <p className="testimonial__role">{role}</p>}
            </figcaption>
          )}
        </div>
      </figure>
    </section>
  )
}
