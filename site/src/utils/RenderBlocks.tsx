import { blockRegistry } from '@/blocks/registry'

type Block = { blockType: string; id?: string } & Record<string, unknown>

export function RenderBlocks({ blocks }: { blocks?: Block[] | null }) {
  if (!blocks || blocks.length === 0) return null

  return (
    <>
      {blocks.map((block, i) => {
        const Component = blockRegistry[block.blockType]
        if (!Component) {
          if (process.env.NODE_ENV !== 'production') {
            console.warn(`[RenderBlocks] Unknown block: ${block.blockType}`)
          }
          return null
        }
        const { blockType, id, ...rest } = block
        return <Component key={id || `${blockType}-${i}`} {...rest} />
      })}
    </>
  )
}
