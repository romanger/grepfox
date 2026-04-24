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
    <div className="block-spacer block-pad">
      <div className="process-timeline">
        <div className="process-timeline__track" />
        <div className="process-timeline__progress" />
        <div className={`process-timeline__grid process-timeline__grid--${cols}col`}>
          {steps.map((step, i) => {
            const done = step.done ?? i < autoDoneCutoff
            const label = step.number ?? String(i + 1).padStart(2, '0')
            return (
              <div className={`process-step${done ? ' process-step--done' : ''}`} key={step.id || i}>
                <div className="process-step__dot" />
                <div className={`mono-label${done ? ' mono-label--accent' : ''}`}>{label}</div>
                <div className="process-step__title">{step.title}</div>
                {step.description && <div className="process-step__desc">{step.description}</div>}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
