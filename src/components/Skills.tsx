'use client'
import { useReveal } from '@/lib/useReveal'
import s from './Skills.module.css'

type Level = 'Expert' | 'Advanced' | 'Proficient'
const levelDots: Record<Level, number> = { Expert: 5, Advanced: 4, Proficient: 3 }

const groups: { cat:string, icon:string, color:string, skills:[string,Level][] }[] = [
  { cat:'AI & Machine Learning', icon:'🤖', color:'amber', skills:[['LangGraph','Expert'],['CrewAI','Expert'],['LangChain','Expert'],['TensorFlow','Advanced'],['OpenAI API','Expert']] },
  { cat:'Web Development',       icon:'🌐', color:'cyan',  skills:[['Next.js','Expert'],['React.js','Advanced'],['FastAPI','Advanced'],['TypeScript','Advanced'],['Docker','Proficient']] },
  { cat:'Mobile Development',    icon:'📱', color:'green', skills:[['Flutter','Expert'],['Dart','Expert'],['Kotlin','Proficient'],['Firebase','Advanced'],['Supabase','Advanced']] },
]

export default function Skills() {
  const ref = useReveal()
  return (
    <section className={s.section} id="skills" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <span className={`${s.label} reveal`}>// skills</span>
        <h2 className={`${s.title} reveal reveal-delay-1`}>Full Stack <span className={s.accent}>AI Developer</span></h2>
        <p className={`${s.sub} reveal reveal-delay-2`}>From training AI models to shipping mobile apps — I cover the entire product stack.</p>

        <div className={s.grid}>
          {groups.map((g,i) => (
            <div key={g.cat} className={`${s.card} ${s[g.color]} reveal`} style={{transitionDelay:`${i*0.1}s`}}>
              <div className={s.cardH}>
                <span className={s.icon}>{g.icon}</span>
                <span className={s.cardTitle}>{g.cat}</span>
              </div>
              {g.skills.map(([name,level]) => (
                <div key={name} className={s.skill}>
                  <div className={s.skillMeta}>
                    <span className={s.sName}>{name}</span>
                    <span className={s.sLevel}>{level}</span>
                  </div>
                  <div className={s.dots}>
                    {[1,2,3,4,5].map(n => (
                      <span
                        key={n}
                        className={`${s.dot} ${n <= levelDots[level] ? s['dotOn_'+g.color] : ''}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
