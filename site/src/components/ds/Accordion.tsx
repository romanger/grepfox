'use client'

import { useState, type ReactNode } from 'react'
import { Icon } from './Icon'

export type AccordionItem = {
  question: string
  answer: ReactNode
  id?: string
}

type Props = {
  items: AccordionItem[]
  defaultOpenIndex?: number | null
  className?: string
}

export function Accordion({ items, defaultOpenIndex = 1, className }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex)

  const toggle = (i: number) => setOpenIndex((cur) => (cur === i ? null : i))

  return (
    <div className={['accordion', className].filter(Boolean).join(' ')}>
      {items.map((item, i) => {
        const open = openIndex === i
        return (
          <div
            key={item.id || i}
            className={`accordion-item${open ? ' accordion-item--open' : ''}`}
            data-index={i}
            role="button"
            tabIndex={0}
            onClick={() => toggle(i)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                toggle(i)
              }
            }}
          >
            <div className="accordion-item__n">{String(i + 1).padStart(2, '0')}</div>
            <div style={{ flex: 1 }}>
              <div className="accordion-item__q">{item.question}</div>
              <div className="accordion-item__a">{item.answer}</div>
            </div>
            <div className="accordion-item__icon">
              <Icon name={open ? 'minus' : 'plus'} size={18} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
