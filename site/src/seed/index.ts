import { getPayload } from 'payload'
import config from '../payload.config'
import { pages, services, header, footer, categories, posts } from './content'
import { ensureMedia } from './uploadMedia'

const IMG_FIELD_BY_BLOCK: Record<string, string> = {
  heroSplit: 'image',
  heroFullbleed: 'background',
  splitLayout: 'image',
  testimonial: 'image',
  accentBlock: 'image',
}

const resolveImageKeys = (
  blocks: any[] | undefined,
  mediaMap: Map<string, string | number>,
): any[] | undefined => {
  if (!blocks) return blocks
  return blocks.map((block) => {
    const next = { ...block }
    const field = IMG_FIELD_BY_BLOCK[block.blockType]
    if (field && typeof block[field] === 'string' && mediaMap.has(block[field])) {
      next[field] = mediaMap.get(block[field])
    }
    if (block.blockType === 'featureGrid' && Array.isArray(block.items)) {
      next.items = block.items.map((item: any) =>
        typeof item.image === 'string' && mediaMap.has(item.image)
          ? { ...item, image: mediaMap.get(item.image) }
          : item,
      )
    }
    return next
  })
}

const upsert = async <T extends { slug: string }>(
  payload: Awaited<ReturnType<typeof getPayload>>,
  collection: 'pages' | 'services' | 'categories' | 'posts',
  items: T[],
) => {
  for (const item of items) {
    const existing = await payload.find({
      collection,
      where: { slug: { equals: item.slug } },
      limit: 1,
    })
    if (existing.docs[0]) {
      await payload.update({
        collection,
        id: existing.docs[0].id,
        data: item as any,
      })
      console.log(`  ⟳  updated ${collection}/${item.slug}`)
    } else {
      await payload.create({
        collection,
        data: item as any,
      })
      console.log(`  +  created ${collection}/${item.slug}`)
    }
  }
}

const run = async () => {
  const payload = await getPayload({ config })

  console.log('\n▸ Media')
  const mediaMap = await ensureMedia(payload)

  const resolvedServices = services.map((s: any) => ({
    ...s,
    heroImage:
      typeof s.heroImage === 'string' && mediaMap.has(s.heroImage)
        ? mediaMap.get(s.heroImage)
        : s.heroImage,
    layout: resolveImageKeys(s.layout, mediaMap),
  }))

  console.log('\n▸ Services')
  await upsert(payload, 'services', resolvedServices)

  console.log('\n▸ Resolving service references in pages')
  const allServices = await payload.find({ collection: 'services', limit: 100 })
  const bySlug = new Map(allServices.docs.map((s: any) => [s.slug, s.id]))

  const resolvedPages = pages.map((page: any) => {
    const layout = resolveImageKeys(page.layout, mediaMap)?.map((block: any) => {
      if (block.blockType !== 'featureGrid' || !block.items) return block
      return {
        ...block,
        items: block.items.map((item: any) =>
          item.linkedService && typeof item.linkedService === 'string'
            ? { ...item, linkedService: bySlug.get(item.linkedService) || null }
            : item,
        ),
      }
    })
    return { ...page, layout }
  })

  console.log('\n▸ Pages')
  await upsert(payload, 'pages', resolvedPages)

  console.log('\n▸ Categories')
  await upsert(payload, 'categories', categories)

  const allCategories = await payload.find({ collection: 'categories', limit: 50 })
  const categoryBySlug = new Map(allCategories.docs.map((c: any) => [c.slug, c.id]))

  const resolvedPosts = posts.map((post: any) => ({
    ...post,
    _status: 'published',
    cover:
      typeof post.cover === 'string' && mediaMap.has(post.cover)
        ? mediaMap.get(post.cover)
        : post.cover,
    category: categoryBySlug.get(post.category) ?? null,
  }))

  console.log('\n▸ Posts')
  await upsert(payload, 'posts', resolvedPosts)

  console.log('\n▸ Globals')
  await payload.updateGlobal({ slug: 'header', data: header as any })
  console.log('  ⟳  header')
  await payload.updateGlobal({ slug: 'footer', data: footer as any })
  console.log('  ⟳  footer')

  console.log('\n✓ Seed complete.\n')
  process.exit(0)
}

try {
  await run()
} catch (err) {
  process.stderr.write(`\n✗ Seed failed: ${(err as Error).stack || err}\n`)
  process.exit(1)
}
