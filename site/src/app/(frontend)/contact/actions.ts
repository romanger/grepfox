'use server'

import { Resend } from 'resend'

export type ContactState = { status: 'idle' | 'ok' | 'error'; message: string }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot — bots fill hidden fields. Pretend success and drop silently.
  if (String(formData.get('company_url') || '').trim()) {
    return { status: 'ok', message: 'THANKS. WE REPLY WITHIN ONE BUSINESS DAY.' }
  }

  const name = String(formData.get('name') || '').trim()
  const email = String(formData.get('email') || '')
    .trim()
    .toLowerCase()
  const company = String(formData.get('company') || '').trim()
  const message = String(formData.get('message') || '').trim()

  if (!name || !EMAIL_RE.test(email) || !message) {
    return { status: 'error', message: 'FILL IN YOUR NAME, A VALID EMAIL AND A MESSAGE.' }
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_INBOX
  const from = process.env.CONTACT_FROM
  if (!apiKey || !to || !from) {
    return { status: 'error', message: 'CONTACT IS NOT CONFIGURED YET. EMAIL US DIRECTLY.' }
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    '',
    message,
  ]
    .filter((line) => line !== null)
    .join('\n')

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `New enquiry — ${name}`,
    text,
  })

  if (error) {
    return { status: 'error', message: 'SOMETHING WENT WRONG. PLEASE TRY AGAIN IN A MOMENT.' }
  }
  return { status: 'ok', message: 'THANKS. WE REPLY WITHIN ONE BUSINESS DAY.' }
}
