import { Accordion } from '@/components/ds/Accordion'

type Item = { question: string; answer: string; id?: string }

export function AccordionFAQ({ items }: { items: Item[] }) {
  return (
    <div className="block-spacer block-pad">
      <Accordion items={items.map((i) => ({ question: i.question, answer: i.answer, id: i.id }))} />
    </div>
  )
}
