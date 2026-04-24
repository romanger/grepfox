import { RichText as LexicalRichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

type Props = {
  data: unknown
  className?: string
}

export function RichText({ data, className = 'richtext' }: Props) {
  if (!data) return null
  return <LexicalRichText data={data as SerializedEditorState} className={className} />
}
