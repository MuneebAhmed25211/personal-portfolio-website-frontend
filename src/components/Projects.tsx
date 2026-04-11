// Projects.tsx
'use client'
import { useReveal } from '@/lib/useReveal'
import s from './Projects.module.css'

const projects = [
  { id:'01', name:'Competitor Intelligence Agent', tag:'4-6 hours of research in 2 minutes', desc:'Multi-agent AI pipeline that deploys 4 specialized agents in sequence — Planner, Searcher, Analyst, Reporter — to deliver a complete competitive analysis with real pricing data, market gaps, and strategic recommendations.', stack:['LangGraph','FastAPI','Next.js','OpenAI','Vercel'], link:'https://competitor-intelligence-mu.vercel.app/', status:'live', highlight:'Parallel execution cuts research time by 95%', type:'AI Agent', featured:true },
  { id:'02', name:'AI Research Agent', tag:'Deep research on any topic, cited', desc:'Enter any topic, get a fully researched and cited report in minutes. The agent autonomously searches the web, synthesizes multiple sources, and formats clean markdown output with source attribution.', stack:['LangChain','FastAPI','Next.js','OpenAI','Vercel'], link:'https://research-agent-frontend-xi.vercel.app/', status:'live', highlight:'Auto-citation with source verification', type:'AI Agent', featured:false },
  { id:'03', name:'Hikary — Car Garage App', tag:'Your digital car garage', desc:'Feature-rich Flutter app for car enthusiasts. Track cars (past/present/future), monitor documents with expiry alerts, log expenses and trips, read and write car reviews — with push notifications throughout.', stack:['Flutter','Dart','Firebase','Supabase'], link:null, status:'dev', highlight:'10+ features including smart document expiry alerts', type:'Mobile App', featured:false },
  { id:'04', name:'10+ Mobile Applications', tag:'Production apps across multiple domains', desc:'A portfolio of Flutter and Kotlin apps across logistics, e-commerce, productivity, and lifestyle. Each built with real users in mind — proper state management, offline support, and production deployments.', stack:['Flutter','Kotlin','Firebase','Supabase','REST APIs'], link:null, status:'shipped', highlight:'Multiple apps with active real-world users', type:'Mobile Portfolio', featured:false },
]
const statusMap: Record<string,{label:string,color:string}> = {
  live:    { label:'● Live',    color:'var(--green)' },
  dev:     { label:'◐ In Dev', color:'var(--amber)' },
  shipped: { label:'✓ Shipped', color:'var(--cyan)'  },
}

export default function Projects() {
  const ref = useReveal()
  return (
    <section className={s.section} id="projects" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <span className={`${s.label} reveal`}>// projects</span>
        <h2 className={`${s.title} reveal reveal-delay-1`}>Things I've <span className={s.accent}>Actually Built</span></h2>
        <p className={`${s.sub} reveal reveal-delay-2`}>Not tutorials. Not clones. Real systems solving real problems.</p>

        <div className={s.grid}>
          {projects.map((p,i) => (
            <div key={p.id} className={`${s.card} ${p.featured?s.featured:''} reveal`} style={{transitionDelay:`${i*0.1}s`}}>
              {p.featured && <div className={s.featBadge}>FEATURED</div>}
              <div className={s.cardMeta}>
                <span className={s.cId}>{p.id}</span>
                <span className={s.cType}>{p.type}</span>
                <span className={s.cStatus} style={{color:statusMap[p.status].color}}>{statusMap[p.status].label}</span>
              </div>
              <h3 className={s.cName}>{p.name}</h3>
              <p className={s.cTag}>{p.tag}</p>
              <p className={s.cDesc}>{p.desc}</p>
              <div className={s.hl}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1l1.4 4.2H12L8.5 7.7 9.9 12 6.5 9.5 3.1 12l1.4-4.3L1 5.2h4.1L6.5 1z" fill="var(--amber)"/></svg>
                <span>{p.highlight}</span>
              </div>
              <div className={s.stack}>{p.stack.map(t=><span key={t} className={s.tech}>{t}</span>)}</div>
              <div className={s.actions}>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener" className={s.btnLive}>
                    Live Demo
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 11L11 2M11 2H6M11 2v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                )}
                {!p.link && <span className={s.onReq}>Details on request</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}