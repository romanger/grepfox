import type { ReactNode } from 'react'
import { MonoLabel } from './MonoLabel'
import { Crosshairs } from './Crosshair'

export type HeroTypeStat = {
  label: string
  value: ReactNode
}

type Props = {
  eyebrow?: ReactNode
  headline: ReactNode
  stats?: HeroTypeStat[]
  className?: string
}

export function HeroType({ eyebrow, headline, stats, className }: Props) {
  return (
    <div className={['hero-type', className].filter(Boolean).join(' ')}>
      {eyebrow && <MonoLabel accent>{eyebrow}</MonoLabel>}
      <h1 className="hero-type__headline">{headline}</h1>
      {stats && stats.length > 0 && (
        <div className="hero-type__stats">
          {stats.map((s, i) => (
            <div key={i}>
              <MonoLabel>{s.label}</MonoLabel>
              <div className="hero-type__stat-value">{s.value}</div>
            </div>
          ))}
        </div>
      )}
      <Crosshairs />
    </div>
  )
}
