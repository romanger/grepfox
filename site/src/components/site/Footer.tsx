import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'
import { LogoLockup } from '@/components/ds/LogoMark'
import { Icon, type IconName } from '@/components/ds/Icon'
import { resolveLinkHref, type LinkValue } from '@/fields/link'

type FooterColumn = {
  title: string
  links?: { link?: LinkValue; icon?: IconName }[]
}

export async function Footer() {
  const payload = await getPayload({ config })
  const data = await payload.findGlobal({ slug: 'footer', depth: 2 }).catch(() => null)

  const columns = (data?.columns as FooterColumn[]) || []
  const legal = (data?.legal as { link?: LinkValue; icon?: IconName }[]) || []
  const brandTag = data?.brandTag as string | undefined
  const tagline = data?.tagline as string | undefined
  const copyright = (data?.copyright as string) || '© GREPFOX'

  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="site-footer__brand">
          <div className="site-footer__brand-mark">
            <LogoLockup size={28} variant="badge" />
            {brandTag && <p className="site-footer__brand-tag">{brandTag}</p>}
          </div>
          {tagline && <p className="site-footer__tagline">{tagline}</p>}
        </div>
        {columns.map((col, i) => (
          <nav key={i} className="site-footer__col" aria-label={col.title}>
            <h3 className="site-footer__col-title">{col.title}</h3>
            {col.links?.map((l, idx) =>
              l.link ? (
                <Link
                  key={idx}
                  href={resolveLinkHref(l.link)}
                  className="site-footer__link"
                  target={l.link.newTab ? '_blank' : undefined}
                >
                  {l.icon && <Icon name={l.icon} size={13} />}
                  {l.link.label}
                </Link>
              ) : null,
            )}
          </nav>
        ))}
      </div>
      <div className="site-footer__bottom">
        <p className="site-footer__copy">
          <Icon name="check" size={12} />
          <span>{copyright}</span>
        </p>
        {legal.length > 0 && (
          <nav className="site-footer__legal" aria-label="Legal">
            {legal.map((l, i) =>
              l.link ? (
                <Link
                  key={i}
                  href={resolveLinkHref(l.link)}
                  target={l.link.newTab ? '_blank' : undefined}
                  className="site-footer__legal-link"
                >
                  {l.icon && <Icon name={l.icon} size={13} />}
                  {l.link.label}
                </Link>
              ) : null,
            )}
          </nav>
        )}
      </div>
    </footer>
  )
}
