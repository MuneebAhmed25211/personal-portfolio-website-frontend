'use client'
import { useReveal } from '@/lib/useReveal'
import s from './About.module.css'

const timeline = [
  {
    year: '2026',
    title: 'Full-Stack AI Developer',
    desc: 'Shipping production Agentic AI systems for international founders and CTOs. 2 live agents deployed, growing client base on LinkedIn and Upwork.',
  },
  {
    year: '2025-26',
    title: 'Learned Generative and Agentic AI & Web Development',
    desc: 'Deep-dived into LangGraph, CrewAI, LangChain, Next.js, and FastAPI. Transitioned from mobile to full-stack AI development and started building end-to-end products.',
  },
  {
    year: '2025',
    title: 'Started with AI, ML & Computer Vision',
    desc: 'First steps into AI/ML with TensorFlow and image classification. Realized how powerful intelligent systems could be inside real products — this sparked the AI path.',
  },
  {
    year: '2024-25',
    title: 'Mobile App Developer',
    desc: 'Built 10+ production Flutter and Kotlin apps across multiple client projects. Worked with Firebase and Supabase backends. This is where real production experience started.',
  },
]

const stack = [
  { label: 'LangGraph',  color: 'var(--amber)' },
  { label: 'LangChain',  color: 'var(--amber)' },
  { label: 'CrewAI',     color: 'var(--amber)' },
  { label: 'FastAPI',    color: 'var(--cyan)'  },
  { label: 'Next.js',    color: 'var(--cyan)'  },
  { label: 'Flutter',    color: 'var(--cyan)'  },
  { label: 'Python',     color: 'var(--green)' },
  { label: 'TypeScript', color: 'var(--green)' },
  { label: 'Firebase',   color: 'var(--green)' },
  { label: 'Supabase',   color: 'var(--green)' },
  { label: 'TensorFlow', color: '#a78bfa'      },
  { label: 'Kotlin',     color: '#a78bfa'      },
]

export default function About() {
  const ref = useReveal()

  return (
    <section className={s.section} id="about" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className={s.grid}>
          {/* Left */}
          <div className={s.left}>
            <span className={`${s.label} reveal`}>// about me</span>
            <h2 className={`${s.title} reveal reveal-delay-1`}>
              I Build Things That <span className={s.accent}>Actually Work</span>
            </h2>
            <div className={`${s.bio} reveal reveal-delay-2`}>
              <p>
                I'm Muneeb — a Full-Stack AI Developer from Lahore, Pakistan.
                I started my career building mobile apps, which gave me a solid
                foundation in shipping real products to real users.
              </p>
              <p>
                In 2025 I went deep into AI — LangGraph, CrewAI, LangChain,
                FastAPI, Next.js. I quickly realized that most "AI products"
                are just impressive demos that break the moment a real user
                touches them.
              </p>
              <p>
                That gap became my niche. I build{' '}
                <strong>production-grade Agentic AI systems</strong> — with
                proper error handling, fallbacks, state management, and
                monitoring. Not demo-only code.
              </p>
            </div>

            <blockquote className={`${s.quote} reveal reveal-delay-3`}>
              <span className={s.qLabel}>// my philosophy</span>
              "The difference between a demo and a production system is
              everything that happens when things go wrong."
            </blockquote>

            <div className={`${s.facts} reveal reveal-delay-4`}>
              {[
                ['📍', 'Based in Lahore, Pakistan · Works globally'],
                ['🌐', 'Clients across US, UK, Europe & Middle East'],
                ['⚡', 'Responds within 24 hours, always'],
                ['🔒', 'NDA available on request'],
              ].map(([icon, txt]) => (
                <div key={txt} className={s.fact}>
                  <span>{icon}</span>
                  <span>{txt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className={s.right}>
            <span className={`${s.label} reveal`}>// journey</span>
            <div className={s.timeline}>
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`${s.tItem} reveal`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className={s.tLeft}>
                    <span className={s.tYear}>{item.year}</span>
                    {i < timeline.length - 1 && <div className={s.tLine} />}
                  </div>
                  <div className={s.tContent}>
                    <div className={s.tDot} />
                    <h3 className={s.tTitle}>{item.title}</h3>
                    <p className={s.tDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className={`${s.stackWrap} reveal`}>
              <span className={s.stackLabel}>// tech i work with</span>
              <div className={s.stackGrid}>
                {stack.map(({ label, color }) => (
                  <span key={label} className={s.stackTag} style={{ '--tag-color': color } as React.CSSProperties}>
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}