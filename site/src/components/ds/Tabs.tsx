'use client'

import { useState, type ReactNode } from 'react'

export type TabItem = {
  id: string
  label: ReactNode
  content: ReactNode
}

type Props = {
  items: TabItem[]
  defaultId?: string
  className?: string
}

export function Tabs({ items, defaultId, className }: Props) {
  const [activeId, setActiveId] = useState(defaultId ?? items[0]?.id)
  const active = items.find((t) => t.id === activeId) ?? items[0]

  return (
    <div className={className}>
      <div className="tabs" role="tablist">
        {items.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={t.id === activeId}
            type="button"
            className={`tab${t.id === activeId ? ' tab--active' : ''}`}
            onClick={() => setActiveId(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="tabs__panel" role="tabpanel">
        {active?.content}
      </div>
    </div>
  )
}
