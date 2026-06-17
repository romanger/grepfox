'use client'

import { useActionState, useState } from 'react'
import { sendContact, type ContactState } from '@/app/(frontend)/contact/actions'

const initial: ContactState = { status: 'idle', message: '' }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Field = 'name' | 'email' | 'message'
const REQUIRED: Field[] = ['name', 'email', 'message']

function validate(field: Field, value: string): string {
  const v = value.trim()
  switch (field) {
    case 'name':
      return v ? '' : 'Enter your name.'
    case 'email':
      if (!v) return 'Enter your email.'
      return EMAIL_RE.test(v) ? '' : 'Enter a valid email address.'
    case 'message':
      return v ? '' : 'Tell us a bit about what you need.'
  }
}

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContact, initial)
  const [values, setValues] = useState({ name: '', email: '', company: '', message: '' })
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({})
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({})

  const onChange =
    (field: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value
      setValues((v) => ({ ...v, [field]: value }))
      // Live-correct an error only once the field has been touched.
      if (field !== 'company' && touched[field]) {
        setErrors((er) => ({ ...er, [field]: validate(field, value) }))
      }
    }

  const onBlur = (field: Field) => () => {
    setTouched((t) => ({ ...t, [field]: true }))
    setErrors((er) => ({ ...er, [field]: validate(field, values[field]) }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const next: Partial<Record<Field, string>> = {}
    for (const f of REQUIRED) {
      const msg = validate(f, values[f])
      if (msg) next[f] = msg
    }
    if (Object.keys(next).length > 0) {
      e.preventDefault()
      setErrors(next)
      setTouched({ name: true, email: true, message: true })
    }
  }

  const errOf = (f: Field) => (touched[f] ? errors[f] : undefined)
  const inputCls = (f: Field) => `input${errOf(f) ? ' input--error' : ''}`

  // On success, replace the form with a thank-you panel.
  if (state.status === 'ok') {
    return (
      <div className="contact-form__success" role="status">
        <p className="mono-label mono-label--accent">MESSAGE SENT</p>
        <p className="contact-form__success-title">Thanks — we’ve got it.</p>
        <p className="contact-form__success-text">
          We reply within one business day. Keep an eye on your inbox (and spam, just in case).
        </p>
      </div>
    )
  }

  return (
    <form className="contact-form" action={action} onSubmit={handleSubmit} noValidate>
      <div className="contact-form__row">
        <div className="input-group">
          <input
            className={inputCls('name')}
            type="text"
            name="name"
            value={values.name}
            onChange={onChange('name')}
            onBlur={onBlur('name')}
            placeholder="Your name"
            aria-label="Name"
            aria-invalid={!!errOf('name')}
          />
          {errOf('name') && (
            <p className="input-group__hint input-group__hint--error" role="alert">
              {errOf('name')}
            </p>
          )}
        </div>
        <div className="input-group">
          <input
            className={inputCls('email')}
            type="email"
            name="email"
            value={values.email}
            onChange={onChange('email')}
            onBlur={onBlur('email')}
            placeholder="you@company.com"
            aria-label="Email address"
            aria-invalid={!!errOf('email')}
          />
          {errOf('email') && (
            <p className="input-group__hint input-group__hint--error" role="alert">
              {errOf('email')}
            </p>
          )}
        </div>
      </div>
      <input
        className="input"
        type="text"
        name="company"
        value={values.company}
        onChange={onChange('company')}
        placeholder="Company (optional)"
        aria-label="Company"
      />
      <div className="input-group">
        <textarea
          className={`${inputCls('message')} contact-form__message`}
          name="message"
          rows={5}
          value={values.message}
          onChange={onChange('message')}
          onBlur={onBlur('message')}
          placeholder="What are you trying to build or fix?"
          aria-label="Message"
          aria-invalid={!!errOf('message')}
        />
        {errOf('message') && (
          <p className="input-group__hint input-group__hint--error" role="alert">
            {errOf('message')}
          </p>
        )}
      </div>
      {/* Honeypot — hidden from humans, catches bots. */}
      <input
        type="text"
        name="company_url"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="contact-form__hp"
      />
      <button className="btn btn--primary" type="submit" disabled={pending}>
        {pending ? 'SENDING…' : 'SEND ENQUIRY'}
      </button>
      {state.message && (
        <p
          className={
            state.status === 'error'
              ? 'contact-form__msg contact-form__msg--error'
              : 'contact-form__msg'
          }
          role="status"
        >
          {state.message}
        </p>
      )}
    </form>
  )
}
