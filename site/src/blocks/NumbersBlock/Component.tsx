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
    <section className="block-spacer" aria-label="Key numbers">
      <ul className={`numbers-block numbers-block--${cols}col`} role="list">
        {items.map((item, i) => {
          const isAccent = item.accent ?? i === 0
          const valueCls = `numbers-block__value${isAccent ? ' numbers-block__value--accent' : ''}`
          return (
            <li className="numbers-block__item" key={item.id || i}>
              <p className={valueCls}>{item.value}</p>
              <div className="numbers-block__meta">
                <p className="mono-label">{item.label}</p>
                {item.sublabel && <p className="numbers-block__label-sub">{item.sublabel}</p>}
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
