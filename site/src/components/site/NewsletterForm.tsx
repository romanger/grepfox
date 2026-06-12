'use client'

import { useActionState } from 'react'
import { subscribe, type SubscribeState } from '@/app/(frontend)/blog/actions'

const initial: SubscribeState = { status: 'idle', message: '' }

export function NewsletterForm() {
  const [state, action, pending] = useActionState(subscribe, initial)
  return (
    <form className="newsletter-form" action={action}>
      <div className="newsletter-form__row">
        <input
          className="input"
          type="email"
          name="email"
          required
          placeholder="you@company.com"
          aria-label="Email address"
        />
        <button className="btn btn--primary" type="submit" disabled={pending}>
          {pending ? 'SENDING…' : 'SUBSCRIBE'}
        </button>
      </div>
      {state.message && (
        <p
          className={
            state.status === 'error'
              ? 'newsletter-form__msg newsletter-form__msg--error'
              : 'newsletter-form__msg'
          }
          role="status"
        >
          {state.message}
        </p>
      )}
    </form>
  )
}
