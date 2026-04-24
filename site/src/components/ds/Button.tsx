import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'
import { Icon, type IconName } from './Icon'

type Appearance = 'primary' | 'secondary' | 'outline' | 'outline-accent' | 'ghost' | 'disabled'
type Size = 'sm' | 'md' | 'lg'

type CommonProps = {
  appearance?: Appearance
  size?: Size
  icon?: IconName
  iconTrailing?: IconName
  children?: ReactNode
}

type LinkProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & { href: string; newTab?: boolean }

type BtnProps = CommonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { href?: undefined }

const classNames = (appearance: Appearance, size: Size) => {
  const parts = ['btn', `btn--${appearance}`]
  if (size !== 'md') parts.push(`btn--${size}`)
  return parts.join(' ')
}

export function Button(props: LinkProps | BtnProps) {
  const { appearance = 'primary', size = 'md', icon, iconTrailing, children } = props

  const content = (
    <>
      {icon && <Icon name={icon} size={size === 'sm' ? 14 : 16} />}
      {children}
      {iconTrailing && <Icon name={iconTrailing} size={size === 'sm' ? 14 : 16} />}
    </>
  )

  const cls = classNames(appearance, size)

  if ('href' in props && props.href) {
    const { href, newTab, ...rest } = props as LinkProps
    const external = /^https?:\/\//.test(href)
    if (external || newTab) {
      return (
        <a
          className={cls}
          href={href}
          target={newTab ? '_blank' : undefined}
          rel={newTab ? 'noreferrer noopener' : undefined}
          {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      )
    }
    return (
      <Link className={cls} href={href} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </Link>
    )
  }

  const { ...rest } = props as BtnProps
  return (
    <button className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  )
}
