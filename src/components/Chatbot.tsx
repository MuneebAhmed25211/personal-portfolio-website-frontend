'use client'
import { useState, useRef, useEffect } from 'react'
import s from './Chatbot.module.css'

type Msg = { role: 'user' | 'assistant'; content: string }

const QUICK = [
  'What can you build?',
  'How much does it cost?',
  'Are you available now?',
  'Show me live projects',
]

export default function Chatbot() {
  const [open, setOpen]     = useState(false)
  const [msgs, setMsgs]     = useState<Msg[]>([{
    role: 'assistant',
    content: "Hey! 👋 I'm Muneeb's assistant. Ask me anything about his skills, services, pricing, or whether he's the right fit for your project.",
  }])
  const [input, setInput]   = useState('')
  const [loading, setLoad]  = useState(false)
  const [unread, setUnread] = useState(1)
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) { setUnread(0); endRef.current?.scrollIntoView({ behavior: 'smooth' }) }
  }, [open, msgs])

  const send = async () => {
    const text = input.trim()
    if (!text || loading) return

    const userMsg: Msg = { role: 'user', content: text }
    const updated = [...msgs, userMsg]
    setMsgs(updated)
    setInput('')
    setLoad(true)

    try {
      // Calls our /api/chat backend route — API key stays server-side
      const res  = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updated }),
      })
      const data = await res.json()
      setMsgs([...updated, { role: 'assistant', content: data.reply || "Something went wrong. Please contact Muneeb directly at muneebahmedeas@gmail.com" }])
    } catch {
      setMsgs([...updated, { role: 'assistant', content: "Network error. Please email muneebahmedeas@gmail.com directly!" }])
    } finally {
      setLoad(false)
    }
  }

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() }
  }

  return (
    <>
      {/* Floating button */}
      <button className={`${s.bubble} ${open ? s.bOpen : ''}`} onClick={() => setOpen(!open)} aria-label="Chat">
        {open
          ? <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          : <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        }
        {!open && unread > 0 && <span className={s.badge}>{unread}</span>}
      </button>

      {/* Chat window */}
      <div className={`${s.win} ${open ? s.winOpen : ''}`}>
        <div className={s.head}>
          <div className={s.headL}>
            <div className={s.av}>M</div>
            <div>
              <p className={s.hName}>Muneeb's Assistant</p>
              <p className={s.hSub}><span className={s.online} />Online · powered by Claude</p>
            </div>
          </div>
          <button className={s.close} onClick={() => setOpen(false)}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 3l9 9M12 3l-9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>
        </div>

        <div className={s.msgs}>
          {msgs.map((m, i) => (
            <div key={i} className={`${s.row} ${m.role === 'user' ? s.rowU : s.rowB}`}>
              {m.role === 'assistant' && <div className={s.av2}>M</div>}
              <div className={m.role === 'user' ? s.bubU : s.bubB}>{m.content}</div>
            </div>
          ))}
          {loading && (
            <div className={`${s.row} ${s.rowB}`}>
              <div className={s.av2}>M</div>
              <div className={s.bubB}><span className={s.dots}><span/><span/><span/></span></div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        {msgs.length === 1 && (
          <div className={s.quick}>
            {QUICK.map(q => (
              <button key={q} className={s.qBtn} onClick={() => { setInput(q) }}>{q}</button>
            ))}
          </div>
        )}

        <div className={s.inputRow}>
          <textarea
            className={s.inp}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={onKey}
            placeholder="Ask me anything..."
            rows={1}
          />
          <button className={s.send} onClick={send} disabled={!input.trim() || loading}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14 8H2M14 8L9 3M14 8L9 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}