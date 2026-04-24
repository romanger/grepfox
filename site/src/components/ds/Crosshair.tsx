type Corner = 'tl' | 'tr' | 'bl' | 'br'

export function Crosshairs({ corners = ['tl', 'tr', 'bl', 'br'] }: { corners?: Corner[] }) {
  return (
    <>
      {corners.map((c) => (
        <span key={c} className={`crosshair crosshair--${c}`} />
      ))}
    </>
  )
}
