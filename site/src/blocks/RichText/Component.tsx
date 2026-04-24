import { RichText as RichTextDS } from '@/utils/RichText'

export function RichTextBlockComponent({ content }: { content: unknown }) {
  return (
    <section className="block-spacer block-pad">
      <div className="prose">
        <RichTextDS data={content} />
      </div>
    </section>
  )
}
