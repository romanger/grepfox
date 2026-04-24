type Item = {
  value: string
  label: string
  sublabel?: string
  accent?: boolean
  id?: string
}

type Props = { items: Item[] }

export function Numbers({ items }: Props) {
  const cols = Math.min(Math.max(items.length, 2), 4) as 2 | 3 | 4
  return (
    <div className="block-spacer">
      <div className={`numbers-block numbers-block--${cols}col`}>
        {items.map((item, i) => {
          const isAccent = item.accent ?? i === 0
          return (
            <div className="numbers-block__item" key={item.id || i}>
              <div
                className="numbers-block__value"
                style={{ color: isAccent ? 'var(--gf-accent)' : 'var(--gf-bone)' }}
              >
                {item.value}
              </div>
              <div>
                <div className="mono-label">{item.label}</div>
                {item.sublabel && <div className="numbers-block__label-sub">{item.sublabel}</div>}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
