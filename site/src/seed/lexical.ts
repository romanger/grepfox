type TextNode = {
  type: 'text'
  text: string
  format: number
  detail: 0
  mode: 'normal'
  style: ''
  version: 1
}

type ParagraphNode = {
  type: 'paragraph'
  format: ''
  indent: 0
  version: 1
  textFormat: 0
  direction: 'ltr'
  children: TextNode[]
}

type HeadingNode = {
  type: 'heading'
  tag: 'h2' | 'h3'
  format: ''
  indent: 0
  version: 1
  direction: 'ltr'
  children: TextNode[]
}

type ListItemNode = {
  type: 'listitem'
  format: ''
  indent: 0
  version: 1
  value: number
  direction: 'ltr'
  children: TextNode[]
}

type ListNode = {
  type: 'list'
  tag: 'ul' | 'ol'
  listType: 'bullet' | 'number'
  start: 1
  format: ''
  indent: 0
  version: 1
  direction: 'ltr'
  children: ListItemNode[]
}

type QuoteNode = {
  type: 'quote'
  format: ''
  indent: 0
  version: 1
  direction: 'ltr'
  children: TextNode[]
}

type RootChild = ParagraphNode | HeadingNode | ListNode | QuoteNode

export type LexicalDoc = {
  root: {
    type: 'root'
    format: ''
    indent: 0
    version: 1
    direction: 'ltr'
    children: RootChild[]
  }
}

const text = (t: string, format = 0): TextNode => ({
  type: 'text',
  text: t,
  format,
  detail: 0,
  mode: 'normal',
  style: '',
  version: 1,
})

// Lexical text-format bitmask: bold 1 · italic 2 · code 16
export type Seg = string | { t: string; bold?: boolean; em?: boolean; code?: boolean }

const seg = (s: Seg): TextNode =>
  typeof s === 'string'
    ? text(s)
    : text(s.t, (s.bold ? 1 : 0) | (s.em ? 2 : 0) | (s.code ? 16 : 0))

export const p = (t: string): ParagraphNode => ({
  type: 'paragraph',
  format: '',
  indent: 0,
  version: 1,
  textFormat: 0,
  direction: 'ltr',
  children: [text(t)],
})

export const h = (tag: 'h2' | 'h3', t: string): HeadingNode => ({
  type: 'heading',
  tag,
  format: '',
  indent: 0,
  version: 1,
  direction: 'ltr',
  children: [text(t)],
})

const list = (tag: 'ul' | 'ol', items: string[]): ListNode => ({
  type: 'list',
  tag,
  listType: tag === 'ul' ? 'bullet' : 'number',
  start: 1,
  format: '',
  indent: 0,
  version: 1,
  direction: 'ltr',
  children: items.map((t, i) => ({
    type: 'listitem',
    format: '',
    indent: 0,
    version: 1,
    value: i + 1,
    direction: 'ltr',
    children: [text(t)],
  })),
})

export const ul = (items: string[]): ListNode => list('ul', items)

export const ol = (items: string[]): ListNode => list('ol', items)

export const quote = (t: string): QuoteNode => ({
  type: 'quote',
  format: '',
  indent: 0,
  version: 1,
  direction: 'ltr',
  children: [text(t)],
})

export const rich = (...segments: Seg[]): ParagraphNode => ({
  type: 'paragraph',
  format: '',
  indent: 0,
  version: 1,
  textFormat: 0,
  direction: 'ltr',
  children: segments.map(seg),
})

export const doc = (...children: RootChild[]): LexicalDoc => ({
  root: {
    type: 'root',
    format: '',
    indent: 0,
    version: 1,
    direction: 'ltr',
    children,
  },
})
