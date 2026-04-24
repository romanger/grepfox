import { MonoLabel } from '@/components/ds/MonoLabel'
import { Media, type MediaRef } from '@/components/ds/Media'

type Props = {
  eyebrow?: string
  quote: string
  name: string
  role?: string
  image?: MediaRef
  imageUrl?: string
}

export function Testimonial({ eyebrow = 'TESTIMONIAL', quote, name, role, image, imageUrl }: Props) {
  const hasImage = !!(image || imageUrl)
  const cls = hasImage ? 'testimonial' : 'testimonial testimonial--stacked'
  return (
    <div className="block-spacer block-pad">
      <div className={cls}>
        {hasImage && (
          <div className="testimonial__image">
            <Media media={image} src={imageUrl} size="card" filtered />
          </div>
        )}
        <div className="testimonial__content">
          <MonoLabel accent>{eyebrow}</MonoLabel>
          <div className="testimonial__quote">“{quote}”</div>
          <div>
            <div className="testimonial__name">{name}</div>
            {role && <div className="testimonial__role">{role}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}
