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

type RootChild = ParagraphNode | HeadingNode | ListNode

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

const text = (t: string, bold = false): TextNode => ({
  type: 'text',
  text: t,
  format: bold ? 1 : 0,
  detail: 0,
  mode: 'normal',
  style: '',
  version: 1,
})

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

export const ul = (items: string[]): ListNode => ({
  type: 'list',
  tag: 'ul',
  listType: 'bullet',
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
