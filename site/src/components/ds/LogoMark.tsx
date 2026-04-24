type Variant = 'badge' | 'plate' | 'mono-light' | 'mono-accent' | 'knockout'

type Props = {
  size?: number
  variant?: Variant
}

const foxPaths = (
  earDark: string,
  earMid: string,
  faceDark: string,
  snoutMid: string,
  eyeLight: string,
  noseDark: string,
) => (
  <>
    <path d="M92 52 L144 52 L114 150 Z" fill={earDark} />
    <path d="M228 52 L176 52 L206 150 Z" fill={earDark} />
    <path d="M104 68 L134 68 L117 132 Z" fill={earMid} />
    <path d="M216 68 L186 68 L203 132 Z" fill={earMid} />
    <path
      d="M74 95 C 74 178, 98 242, 160 262 C 222 242, 246 178, 246 95 L 246 138 C 222 160, 190 172, 160 172 C 130 172, 98 160, 74 138 Z"
      fill={faceDark}
    />
    <path d="M125 165 L195 165 L160 238 Z" fill={snoutMid} />
    <ellipse cx="126" cy="145" rx="20" ry="7.5" fill={eyeLight} transform="rotate(-16 126 145)" />
    <ellipse cx="194" cy="145" rx="20" ry="7.5" fill={eyeLight} transform="rotate(16 194 145)" />
    <ellipse cx="130" cy="146" rx="3.2" ry="3.2" fill={noseDark} />
    <ellipse cx="190" cy="146" rx="3.2" ry="3.2" fill={noseDark} />
    <path d="M153 198 L167 198 L160 210 Z" fill={noseDark} />
  </>
)

export function LogoMark({ size = 40, variant = 'badge' }: Props) {
  const rx = Math.round(size * 0.175)

  if (variant === 'badge') {
    return (
      <img
        src="/assets/logo-mark.svg"
        alt="Grepfox"
        width={size}
        height={size}
        style={{ display: 'inline-block', borderRadius: rx, flexShrink: 0 }}
      />
    )
  }

  const variants: Record<Exclude<Variant, 'badge'>, { bg: string | null; fox: React.ReactNode }> = {
    plate: {
      bg: '#0a0a0a',
      fox: foxPaths('#ff5a1f', '#C4661E', '#ff5a1f', '#C4661E', '#0a0a0a', '#0a0a0a'),
    },
    'mono-light': {
      bg: null,
      fox: foxPaths('#ebe8e3', '#ebe8e3', '#ebe8e3', '#ebe8e3', '#0a0a0a', '#0a0a0a'),
    },
    'mono-accent': {
      bg: null,
      fox: foxPaths('#ff5a1f', '#ff5a1f', '#ff5a1f', '#ff5a1f', '#0a0a0a', '#0a0a0a'),
    },
    knockout: {
      bg: '#ff5a1f',
      fox: foxPaths('#ebe8e3', '#F4F0EA', '#ebe8e3', '#F4F0EA', '#0a0a0a', '#0a0a0a'),
    },
  }

  const v = variants[variant as Exclude<Variant, 'badge'>]

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 320 320"
      aria-label="Grepfox"
      style={{ display: 'inline-block', flexShrink: 0 }}
    >
      {v.bg && <rect width="320" height="320" rx={56} fill={v.bg} />}
      {v.fox}
    </svg>
  )
}

export function LogoLockup({ size = 22, variant = 'badge' }: Props) {
  const markSize = Math.round(size * 1.6)
  const gap = Math.round(size * 0.42)
  const color = variant === 'knockout' ? '#0a0a0a' : '#ebe8e3'
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap,
        whiteSpace: 'nowrap',
      }}
    >
      <LogoMark size={markSize} variant={variant} />
      <span
        style={{
          fontFamily: 'var(--ff-display)',
          fontWeight: 700,
          fontSize: size,
          letterSpacing: '-0.04em',
          lineHeight: 0.88,
          color,
          textTransform: 'uppercase',
        }}
      >
        Grepfox
      </span>
    </div>
  )
}
