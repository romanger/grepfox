import { SectionHead as SectionHeadDS } from '@/components/ds/SectionHead'

type Props = {
  number?: string
  title: string
  subtitle?: string
}

export function SectionHead(props: Props) {
  return (
    <div className="block-spacer">
      <SectionHeadDS {...props} />
    </div>
  )
}
