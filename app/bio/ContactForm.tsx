'use client'

import { useState } from 'react'
import styles from './bio.module.css'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [fields, setFields] = useState({ name: '', email: '', message: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    const { name, email, message } = fields
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Preencha todos os campos.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('E-mail inválido.')
      return
    }
    setSent(true)
  }

  function handleReset() {
    setFields({ name: '', email: '', message: '' })
    setError('')
    setSent(false)
  }

  if (sent) {
    return (
      <div className={styles.formWrap}>
        <div className={styles.successBox} role="status" aria-live="polite">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="#ffb5c7" aria-hidden="true">
            <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
          </svg>
          <p className={styles.successTitle}>mensagem enviada!</p>
          <p className={styles.successBody}>
            Obrigada pelo interesse.<br />Entrarei em contato em breve.
          </p>
          <button className={styles.btnReset} onClick={handleReset} type="button">
            nova mensagem
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.formWrap}>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <input
          className={styles.formField}
          type="text"
          placeholder="seu nome"
          autoComplete="name"
          aria-label="Seu nome"
          value={fields.name}
          onChange={e => setFields(f => ({ ...f, name: e.target.value }))}
        />
        <input
          className={styles.formField}
          type="email"
          placeholder="seu e-mail"
          autoComplete="email"
          aria-label="Seu e-mail"
          inputMode="email"
          value={fields.email}
          onChange={e => setFields(f => ({ ...f, email: e.target.value }))}
        />
        <textarea
          className={styles.formField}
          placeholder="conte um pouco sobre a parceria que você tem em mente..."
          rows={4}
          aria-label="Mensagem"
          value={fields.message}
          onChange={e => setFields(f => ({ ...f, message: e.target.value }))}
        />
        {error && (
          <p className={styles.formError} role="alert">
            {error}
          </p>
        )}
        <button className={styles.btnSubmit} type="submit">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
          enviar proposta
        </button>
      </form>
    </div>
  )
}
