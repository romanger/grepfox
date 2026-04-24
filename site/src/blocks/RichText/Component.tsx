import { RichText as RichTextDS } from '@/utils/RichText'

export function RichTextBlockComponent({ content }: { content: unknown }) {
  return (
    <div className="block-spacer block-pad">
      <div className="prose">
        <RichTextDS data={content} />
      </div>
    </div>
  )
}
