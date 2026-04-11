'use client'
import { useState, useEffect } from 'react'
import s from './Navbar.module.css'

const links = ['About','Skills','Projects','Services','Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`${s.nav} ${scrolled ? s.scrolled : ''}`}>
      <div className={s.inner}>
        <a href="#" className={s.logo}>
          <span className={s.sym}>&gt;_</span>
          <span className={s.txt}>muneeb.dev</span>
        </a>

        <ul className={`${s.links} ${open ? s.open : ''}`}>
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className={s.link} onClick={() => setOpen(false)}>
                {l}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className={s.cta} onClick={() => setOpen(false)}>
              Hire Me
            </a>
          </li>
        </ul>

        <button className={s.hamburger} onClick={() => setOpen(!open)} aria-label="menu">
          <span className={open ? s.b1o : s.b1} />
          <span className={open ? s.b2o : s.b2} />
          <span className={open ? s.b3o : s.b3} />
        </button>
      </div>
    </nav>
  )
}