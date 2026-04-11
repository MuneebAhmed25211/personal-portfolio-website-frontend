import type { Metadata } from 'next'
import { Space_Mono, Syne, DM_Sans } from 'next/font/google'
import './globals.css'

// next/font loads fonts properly - never use @import in CSS for Next.js
const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const syne = Syne({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Muneeb Ahmed — Full-Stack AI Developer',
  description:
    'I build production-grade Agentic AI systems, web apps, and mobile apps for founders and CTOs. LangGraph • CrewAI • Next.js • Flutter • FastAPI.',
  keywords: ['AI Developer', 'Agentic AI', 'LangGraph', 'CrewAI', 'Next.js', 'Flutter', 'FastAPI'],
  authors: [{ name: 'Muneeb Ahmed' }],
  verification: {
    google: 'cxWDgfVRtqbjT6lLv9C-MwjFgZoM9NbVQrj2obL8qLI',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${syne.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}