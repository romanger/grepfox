type Step = {
  number?: string
  title: string
  description?: string
  done?: boolean
  id?: string
}

export function ProcessTimeline({ steps }: { steps: Step[] }) {
  const cols = Math.min(Math.max(steps.length, 3), 6) as 3 | 4 | 5 | 6
  const autoDoneCutoff = Math.ceil(steps.length * 0.6)

  return (
    <section className="block-spacer block-pad" aria-label="Process">
      <div className="process-timeline">
        <div className="process-timeline__track" aria-hidden="true" />
        <div className="process-timeline__progress" aria-hidden="true" />
        <ol className={`process-timeline__grid process-timeline__grid--${cols}col`}>
          {steps.map((step, i) => {
            const done = step.done ?? i < autoDoneCutoff
            const label = step.number ?? String(i + 1).padStart(2, '0')
            return (
              <li className={`process-step${done ? ' process-step--done' : ''}`} key={step.id || i}>
                <span className="process-step__dot" aria-hidden="true" />
                <p className={`mono-label${done ? ' mono-label--accent' : ''}`}>{label}</p>
                <h3 className="process-step__title">{step.title}</h3>
                {step.description && <p className="process-step__desc">{step.description}</p>}
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
