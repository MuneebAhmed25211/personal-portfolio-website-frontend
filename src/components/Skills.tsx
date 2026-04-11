'use client'
import { useReveal } from '@/lib/useReveal'
import s from './Skills.module.css'

const groups = [
  { cat:'AI & Machine Learning', icon:'🤖', color:'amber', skills:[['LangGraph',95],['CrewAI',90],['LangChain',92],['TensorFlow',80],['OpenAI API',95]] },
  { cat:'Web Development',       icon:'🌐', color:'cyan',  skills:[['Next.js',90],['React.js',88],['FastAPI',85],['TypeScript',82],['Docker',75]] },
  { cat:'Mobile Development',    icon:'📱', color:'green', skills:[['Flutter',92],['Dart',90],['Kotlin',75],['Firebase',88],['Supabase',85]] },
]
const tags = ['Python','TypeScript','Dart','Kotlin','LangGraph','CrewAI','LangChain','OpenAI','Next.js','React','FastAPI','Flutter','Firebase','Supabase','PostgreSQL','TensorFlow','Docker','Vercel','Render','Git']

export default function Skills() {
  const ref = useReveal()
  return (
    <section className={s.section} id="skills" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <span className={`${s.label} reveal`}>// skills</span>
        <h2 className={`${s.title} reveal reveal-delay-1`}>Full Stack, <span className={s.accent}>No Gaps</span></h2>
        <p className={`${s.sub} reveal reveal-delay-2`}>From training AI models to shipping mobile apps — I cover the entire product stack.</p>

        <div className={s.grid}>
          {groups.map((g,i) => (
            <div key={g.cat} className={`${s.card} ${s[g.color]} reveal`} style={{transitionDelay:`${i*0.1}s`}}>
              <div className={s.cardH}>
                <span className={s.icon}>{g.icon}</span>
                <span className={s.cardTitle}>{g.cat}</span>
              </div>
              {g.skills.map(([name,pct]) => (
                <div key={name} className={s.skill}>
                  <div className={s.skillMeta}><span className={s.sName}>{name}</span><span className={s.sPct}>{pct}%</span></div>
                  <div className={s.bar}><div className={`${s.fill} ${s['fill_'+g.color]}`} style={{width:`${pct}%`}} /></div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className={`${s.tags} reveal`}>
          <span className={s.tagsLbl}>// tech I work with daily</span>
          <div className={s.tagList}>{tags.map(t=><span key={t} className={s.tag}>{t}</span>)}</div>
        </div>
      </div>
    </section>
  )
}