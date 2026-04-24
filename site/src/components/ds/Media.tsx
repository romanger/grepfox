import { FilteredImage } from './FilteredImage'

export type MediaDoc = {
  id?: string | number
  url?: string | null
  alt?: string | null
  sizes?: Record<string, { url?: string | null; width?: number | null; height?: number | null }>
}

export type MediaRef = MediaDoc | string | number | null | undefined

const resolveMediaDoc = (m: MediaRef): MediaDoc | null => {
  if (!m || typeof m === 'string' || typeof m === 'number') return null
  return m
}

type Props = {
  media?: MediaRef
  src?: string | null
  size?: 'thumb' | 'card' | 'hero' | 'original'
  alt?: string
  filtered?: boolean
  className?: string
  style?: React.CSSProperties
}

export function Media({ media, src, size = 'original', alt, filtered, className, style }: Props) {
  let url = ''
  let docAlt = ''
  if (src) {
    url = src
  } else {
    const doc = resolveMediaDoc(media)
    if (!doc) {
      return (
        <div className={['img-placeholder', className].filter(Boolean).join(' ')} style={style}>
          <div className="img-placeholder__label">IMAGE</div>
        </div>
      )
    }
    const sized = size !== 'original' ? doc.sizes?.[size]?.url : null
    url = sized || doc.url || ''
    docAlt = doc.alt || ''
  }
  const finalAlt = alt || docAlt
  if (filtered) {
    return <FilteredImage src={url} alt={finalAlt} className={className} style={style} />
  }
  return <img src={url} alt={finalAlt} className={className} style={style} />
}
