'use client'
import { useReveal } from '@/lib/useReveal'
import s from './Services.module.css'

const services = [
  {
    icon: '⚡',
    title: 'Agentic AI Systems',
    price: 'From $2,500',
    desc: 'Multi-agent pipelines that work reliably in production. LangGraph + CrewAI with proper state management, error handling, and human fallbacks.',
    features: [
      'Multi-agent orchestration with LangGraph',
      'Parallel task execution',
      'Graceful error handling & retries',
      'API rate limit management',
      'Human-in-the-loop fallbacks',
    ],
    hot: true,
  },
  {
    icon: '🤖',
    title: 'Generative AI & Chatbots',
    price: 'From $2,500',
    desc: 'LangChain-powered RAG systems, custom chatbots, and document Q&A. AI that knows your business and talks to your users intelligently.',
    features: [
      'RAG pipelines with vector databases',
      'Custom chatbots with memory',
      'Document Q&A over PDFs & docs',
      'Model-agnostic — any LLM provider or open-source model integration',
      'Embeddable chat widgets',
    ],
    hot: false,
  },
  {
    icon: '👁️',
    title: 'Computer Vision',
    price: 'From $2,000',
    desc: 'TensorFlow-based image classification, object detection, and custom model training — integrated into real products, not just notebooks.',
    features: [
      'Image classification & recognition',
      'Object detection pipelines',
      'Custom model training & fine-tuning',
      'TensorFlow / Keras implementation',
      'REST API deployment of models',
    ],
    hot: false,
  },
  {
    icon: '🌐',
    title: 'Web App Development',
    price: 'From $2,000',
    desc: 'Full-stack web apps with Next.js frontends and FastAPI backends. SEO-optimized, fast deployments, real authentication flows.',
    features: [
      'Next.js 14+ with App Router',
      'FastAPI REST backends',
      'Supabase / Firebase integration',
      'Cloud-agnostic deployment — Vercel, AWS, GCP, or wherever you need',
      'Auth & role management',
    ],
    hot: false,
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    price: 'From $1,500',
    desc: '10+ apps shipped. Flutter or native Kotlin — built for real users, production-deployed, properly maintained.',
    features: [
      'Cross-platform Android apps (Flutter)',
      'Native Kotlin for Android',
      'Firebase / Supabase backend',
      'Push notifications & real-time',
      'Play Store deployment & publishing',
    ],
    hot: false,
  },
  {
    icon: '🔧',
    title: 'Maintenance & Retainer',
    price: '$200–500 / month',
    desc: "Ongoing support for systems I build. Bug fixes, monitoring, updates, and small features — so you're never stuck waiting.",
    features: [
      'Monthly bug fixes & updates',
      'Performance monitoring',
      'Small feature additions',
      'Priority response time',
      'Monthly progress reports',
    ],
    hot: false,
  },
]

export default function Services() {
  const ref = useReveal()
  return (
    <section className={s.section} id="services" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <span className={`${s.label} reveal`}>// services</span>
        <h2 className={`${s.title} reveal reveal-delay-1`}>What I <span className={s.accent}>Build for You</span></h2>
        <p className={`${s.sub} reveal reveal-delay-2`}>End-to-end delivery. You don't need to manage 5 freelancers — just one call with me.</p>
        <div className={s.grid}>
          {services.map((sv, i) => (
            <div
              key={sv.title}
              className={`${s.card} ${sv.hot ? s.hot : ''} reveal`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {sv.hot && <div className={s.hotBadge}>Most Requested</div>}
              <div className={s.cardTop}>
                <span className={s.icon}>{sv.icon}</span>
                <div>
                  <h3 className={s.sTitle}>{sv.title}</h3>
                  <span className={s.price}>{sv.price}</span>
                </div>
              </div>
              <p className={s.desc}>{sv.desc}</p>
              <ul className={s.features}>
                {sv.features.map(f => (
                  <li key={f} className={s.feat}>
                    <span className={s.arr}>→</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`${s.btn} ${sv.hot ? s.btnH : s.btnS}`}>Get a Quote</a>
            </div>
          ))}
        </div>
        <div className={`${s.note} reveal`}>
          <span className={s.noteMono}>// Note: </span>
          All prices are starting points. Final cost depends on complexity and timeline. I always give honest estimates — no hidden fees.
        </div>
      </div>
    </section>
  )
}