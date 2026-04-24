import type { CSSProperties } from 'react'

type Props = {
  src: string
  alt: string
  style?: CSSProperties
  className?: string
}

export function FilteredImage({ src, alt, style, className }: Props) {
  return (
    <div className={['img-filtered', className].filter(Boolean).join(' ')} style={style}>
      <img className="img-filtered__photo" src={src} alt={alt} />
      <span className="img-filtered__tone" />
      <span className="img-filtered__veil" />
    </div>
  )
}
