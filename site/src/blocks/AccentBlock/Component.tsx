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
    <div className="block-spacer">
      <div className="accent-block">
        <div className="accent-block__content">
          {eyebrow && <div className="mono-label" style={{ color: 'var(--gf-void)' }}>{eyebrow}</div>}
          <div>
            <div className="accent-block__title">
              {title.split('\n').map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </div>
            {description && (
              <p style={{ fontSize: 17, marginTop: 20, maxWidth: 420, lineHeight: 1.5 }}>
                {description}
              </p>
            )}
          </div>
          {footnote && (
            <div style={{ fontFamily: 'var(--ff-mono)', fontSize: 12, letterSpacing: '0.14em' }}>
              {footnote}
            </div>
          )}
        </div>
        <Media
          media={image}
          src={imageUrl}
          size="hero"
          filtered
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  )
}
