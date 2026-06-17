import { SectionHead as SectionHeadDS } from '@/components/ds/SectionHead'

type Props = {
  number?: string
  title: string
  subtitle?: string
  surface?: boolean
}

export function SectionHead({ surface, ...props }: Props) {
  return (
    <header className={`block-spacer${surface ? ' is-surface' : ''}`}>
      <SectionHeadDS {...props} />
    </header>
  )
}
