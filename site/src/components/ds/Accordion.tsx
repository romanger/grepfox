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
    <ul className={['accordion', className].filter(Boolean).join(' ')} role="list">
      {items.map((item, i) => {
        const open = openIndex === i
        const panelId = `accordion-panel-${item.id || i}`
        const headerId = `accordion-header-${item.id || i}`
        return (
          <li
            key={item.id || i}
            className={`accordion-item${open ? ' accordion-item--open' : ''}`}
          >
            <h3 className="accordion-item__heading">
              <button
                type="button"
                id={headerId}
                className="accordion-item__trigger"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => toggle(i)}
              >
                <span className="accordion-item__n">{String(i + 1).padStart(2, '0')}</span>
                <span className="accordion-item__q">{item.question}</span>
                <span className="accordion-item__icon" aria-hidden="true">
                  <Icon name={open ? 'minus' : 'plus'} size={18} />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              hidden={!open}
              className="accordion-item__a"
            >
              {item.answer}
            </div>
          </li>
        )
      })}
    </ul>
  )
}
