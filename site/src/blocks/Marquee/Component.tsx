import { Fragment } from 'react'

type Item = { text: string; id?: string }

function Line({ items }: { items: Item[] }) {
  return (
    <>
      {items.map((it, i) => (
        <Fragment key={`${it.id || i}`}>
          {i > 0 && (
            <>
              {' '}
              <span style={{ color: 'var(--gf-accent)' }}>+</span>{' '}
            </>
          )}
          {it.text}
        </Fragment>
      ))}
    </>
  )
}

export function Marquee({ items }: { items: Item[] }) {
  return (
    <section className="block-spacer" aria-label="Marquee">
      <div className="marquee">
        <p className="marquee__text">
          <Line items={items} />
          <span aria-hidden="true">
            &nbsp;&nbsp;&nbsp;
            <Line items={items} />
            &nbsp;&nbsp;&nbsp;
          </span>
        </p>
      </div>
    </section>
  )
}
