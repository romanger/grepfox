type Props = {
  number?: string
  title: string
  subtitle?: string
}

export function SectionHead({ number, title, subtitle }: Props) {
  return (
    <div className={`section-head${number ? '' : ' section-head--bare'}`}>
      {number && <div className="section-head__n">{number}</div>}
      <div>
        <h2 className="section-head__title">{title}</h2>
        {subtitle && <p className="section-head__sub">{subtitle}</p>}
      </div>
    </div>
  )
}
