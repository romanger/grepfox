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
    <div className="site-footer">
      <div className="site-footer__grid">
        <div>
          <div
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 6,
            }}
          >
            <LogoLockup size={28} variant="badge" />
            {brandTag && (
              <div
                style={{
                  fontFamily: 'var(--ff-mono)',
                  fontSize: 10,
                  letterSpacing: '0.14em',
                  color: 'var(--gf-dim)',
                  textTransform: 'uppercase',
                }}
              >
                {brandTag}
              </div>
            )}
          </div>
          {tagline && (
            <p
              style={{
                fontSize: 14,
                color: 'var(--gf-subtle)',
                marginTop: 20,
                maxWidth: 360,
                lineHeight: 1.5,
              }}
            >
              {tagline}
            </p>
          )}
        </div>
        {columns.map((col, i) => (
          <div key={i}>
            <div className="site-footer__col-title">{col.title}</div>
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
          </div>
        ))}
      </div>
      <div className="site-footer__bottom">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
          <Icon name="check" size={12} />
          {copyright}
        </div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 16 }}>
          {legal.map((l, i) =>
            l.link ? (
              <Link
                key={i}
                href={resolveLinkHref(l.link)}
                target={l.link.newTab ? '_blank' : undefined}
                style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                {l.icon && <Icon name={l.icon} size={13} />}
                {l.link.label}
              </Link>
            ) : null,
          )}
        </div>
      </div>
    </div>
  )
}
