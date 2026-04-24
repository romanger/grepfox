import { Accordion } from '@/components/ds/Accordion'

type Item = { question: string; answer: string; id?: string }

export function AccordionFAQ({ items }: { items: Item[] }) {
  return (
    <section className="block-spacer block-pad" aria-label="FAQ">
      <Accordion items={items.map((i) => ({ question: i.question, answer: i.answer, id: i.id }))} />
    </section>
  )
}
