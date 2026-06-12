'use server'

import { getPayload } from 'payload'
import config from '@payload-config'

export type SubscribeState = { status: 'idle' | 'ok' | 'error'; message: string }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function subscribe(_prev: SubscribeState, formData: FormData): Promise<SubscribeState> {
  const email = String(formData.get('email') || '')
    .trim()
    .toLowerCase()
  if (!EMAIL_RE.test(email)) {
    return { status: 'error', message: 'ENTER A VALID EMAIL.' }
  }
  const payload = await getPayload({ config })
  const existing = await payload.find({
    collection: 'subscribers',
    where: { email: { equals: email } },
    limit: 1,
  })
  if (existing.docs[0]) {
    return { status: 'ok', message: 'ALREADY ON THE LIST.' }
  }
  await payload.create({ collection: 'subscribers', data: { email, source: 'blog' } })
  return { status: 'ok', message: 'SUBSCRIBED. TALK SOON.' }
}
