type LexicalNode = { text?: string; children?: LexicalNode[] }

const collectText = (node: LexicalNode): string => {
  const own = node.text || ''
  const kids = (node.children || []).map(collectText).join(' ')
  return [own, kids].filter(Boolean).join(' ')
}

export function readingTime(body: unknown): number {
  const root = (body as { root?: LexicalNode } | null | undefined)?.root
  if (!root) return 1
  const words = collectText(root).split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}
