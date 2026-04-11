'use client'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useReveal } from '@/lib/useReveal'
import s from './Contact.module.css'

const contacts = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
    label: 'WhatsApp',
    value: '+92 303 059 6887',
    href: 'https://wa.me/923030596887',
    note: 'Fastest response',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    label: 'Email',
    value: 'muneebahmad25211@gmail.com',
    href: 'mailto:muneebahmad25211@gmail.com',
    note: 'For detailed inquiries',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
    label: 'LinkedIn',
    value: 'Muneeb Ahmed',
    href: 'https://linkedin.com/in/muneeb-ahmed-020065231',
    note: 'Connect & DM',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>,
    label: 'GitHub',
    value: 'github.com/muneeb-ahmed',
    href: 'https://github.com/muneeb-ahmed',
    note: 'See my code',
  },
]

export default function Contact() {
  const ref = useReveal()
  const [form, setForm] = useState({ name: '', email: '', budget: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    try {
      await emailjs.send(
        'service_dxcb4py',   // ← paste your Service ID
        'template_ubb6y1r',  // ← paste your Template ID
        {
          from_name:  form.name,
          from_email: form.email,
          budget:     form.budget || 'Not specified',
          message:    form.message,
        },
        '3CqWznJPLQj9VifOg'    // ← paste your Public Key
      )
      setStatus('sent')
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  

  }

  return (
    <section className={s.section} id="contact" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <span className={`${s.label} reveal`}>// contact</span>
        <h2 className={`${s.title} reveal reveal-delay-1`}>
          Let's Build <span className={s.accent}>Something Real</span>
        </h2>
        <p className={`${s.sub} reveal reveal-delay-2`}>
          Have an idea? A problem AI could solve? Or just want to know if something's possible?
          Reach out — I respond to every serious inquiry.
        </p>

        <div className={s.layout}>
          {/* Left: contact cards */}
          <div className={`${s.left} reveal reveal-delay-2`}>
            <div className={s.cards}>
              {contacts.map(c => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener" className={s.card}>
                  <div className={s.cardIcon}>{c.icon}</div>
                  <div className={s.cardInfo}>
                    <span className={s.cardLabel}>{c.label}</span>
                    <span className={s.cardVal}>{c.value}</span>
                    <span className={s.cardNote}>{c.note}</span>
                  </div>
                  <svg className={s.arrow} width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path d="M2 13L13 2M13 2H7M13 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ))}
            </div>

            <div className={s.avail}>
              <div className={s.availDot} />
              <div>
                <p className={s.availTitle}>Currently Available</p>
                <p className={s.availSub}>Taking on new projects · Lahore, Pakistan · Works globally</p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className={`${s.right} reveal reveal-delay-3`}>
            <div className={s.formCard}>
              <div className={s.formHead}>
                <span className={s.formTitle}>Send a Message</span>
                <span className={s.formSub}>I'll reply within 24 hours</span>
              </div>

              {status === 'sent' ? (
                <div className={s.success}>
                  <div className={s.successIcon}>✓</div>
                  <p>Message received! I'll reply within 24 hours.</p>
                  <span className={s.successMono}>// checking inbox...</span>
                </div>
              ) : (
                <div className={s.form}>
                  <div className={s.row}>
                    <div className={s.field}>
                      <label className={s.fieldLabel}>Name *</label>
                      <input name="name" value={form.name} onChange={change} placeholder="Your name" className={s.input} />
                    </div>
                    <div className={s.field}>
                      <label className={s.fieldLabel}>Email *</label>
                      <input name="email" type="email" value={form.email} onChange={change} placeholder="you@company.com" className={s.input} />
                    </div>
                  </div>

                  <div className={s.field}>
                    <label className={s.fieldLabel}>Budget Range</label>
                    <select name="budget" value={form.budget} onChange={change} className={s.input}>
                      <option value="">Select a range...</option>
                      <option value="<500">Under $500</option>
                      <option value="500-2000">$500 – $2,000</option>
                      <option value="2000-5000">$2,000 – $5,000</option>
                      <option value="5000+">$5,000+</option>
                      <option value="retainer">Monthly Retainer</option>
                    </select>
                  </div>

                  <div className={s.field}>
                    <label className={s.fieldLabel}>What are you building? *</label>
                    <textarea
                      name="message" value={form.message} onChange={change} rows={5}
                      placeholder="Tell me about your project — the problem it solves, the tech you're thinking of, and any deadline."
                      className={`${s.input} ${s.textarea}`}
                    />
                  </div>

                  <button onClick={submit} disabled={status === 'sending'} className={s.submitBtn}>
                    {status === 'sending'
                      ? <><span className={s.spinner} /> Sending...</>
                      : <>Send Message <span className={s.btnArrow}>→</span></>
                    }
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}