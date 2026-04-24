import type { Field, GroupField } from 'payload'

type Appearance = 'primary' | 'secondary' | 'outline' | 'outline-accent' | 'ghost'

type LinkOptions = {
  appearances?: Appearance[] | false
  disableLabel?: boolean
  overrides?: Partial<GroupField>
}

export const linkField = ({ appearances, disableLabel, overrides }: LinkOptions = {}): GroupField => {
  const allAppearances: Appearance[] = ['primary', 'secondary', 'outline', 'outline-accent', 'ghost']
  const shownAppearances = appearances === false ? [] : (appearances ?? allAppearances)

  const fields: Field[] = [
    {
      name: 'type',
      type: 'radio',
      defaultValue: 'internal',
      admin: { layout: 'horizontal' },
      options: [
        { label: 'Internal', value: 'internal' },
        { label: 'External URL', value: 'external' },
      ],
    },
    {
      name: 'newTab',
      type: 'checkbox',
      label: 'Open in new tab',
    },
    {
      name: 'reference',
      type: 'relationship',
      relationTo: ['pages'],
      required: false,
      admin: {
        condition: (_, sibling) => sibling?.type === 'internal',
      },
    },
    {
      name: 'url',
      type: 'text',
      required: false,
      admin: {
        condition: (_, sibling) => sibling?.type === 'external',
      },
    },
  ]

  if (!disableLabel) {
    fields.push({
      name: 'label',
      label: 'Button label',
      type: 'text',
    })
  }

  if (shownAppearances.length > 0) {
    fields.push({
      name: 'appearance',
      type: 'select',
      defaultValue: 'primary',
      options: shownAppearances.map((a) => ({ label: a, value: a })),
    })
  }

  return {
    name: 'link',
    type: 'group',
    fields,
    ...overrides,
  }
}

export type LinkValue = {
  type: 'internal' | 'external'
  newTab?: boolean
  reference?: { relationTo: string; value: { slug?: string } | string } | null
  url?: string
  label?: string
  appearance?: Appearance
}

export const resolveLinkHref = (link?: LinkValue | null): string => {
  if (!link) return '#'
  if (link.type === 'external') return link.url || '#'
  const ref = link.reference?.value
  if (!ref) return '#'
  if (typeof ref === 'string') return '/'
  const slug = ref.slug
  if (!slug || slug === 'home') return '/'
  return `/${slug}`
}
