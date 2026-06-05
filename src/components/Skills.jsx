import { useEffect, useRef, useState } from 'react'
import './Skills.css'

const categories = [
  {
    title: 'CORE - IT & Teknis',
    pills: ['Troubleshoot PC / Laptop','Repair PC / Laptop','Instalasi OS (Windows, Linux & Other)','Rakit PC / Laptop','Network Config'],
    active: true,
  },
  {
    title: 'Web Dev',
    pills: ['HTML5','CSS3','JavaScript','ReactJS','Responsive Design'],
  },
  {
    title: 'Tools & Platform',
    pills: ['Git & GitHub','VS Code','MS Word & Excel','Editing Foto & Video','Adobe Photoshop'],
  },
  {
    title: 'Lainnya',
    pills: ['Digital Marketing','Analisis Teknikal Saham','Bahasa Inggris','Java (Basic)'],
  },
]

const bars = [
  { label: 'HTML & CSS', pct: 85 },
  { label: 'JavaScript', pct: 65 },
  { label: 'ReactJS', pct: 30 },
  { label: 'PC Troubleshooting & Maintenance', pct: 90 },
  { label: 'Digital Marketing', pct: 80 },
  { label: 'Git & GitHub', pct: 60 },
]

export default function Skills() {
  const sectionRef = useRef(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            if (e.target.classList.contains('skills-bars-wrap') && !animated) {
              setAnimated(true)
            }
          }
        })
      }, { threshold: 0.15 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [animated])

  return (
    <section className="section skills" id="skills" ref={sectionRef}>
      <div className="container">
        <div className="section-tag reveal">Tech Stack</div>
        <h2 className="section-title reveal">My <span className="accent">Skills</span></h2>

        <div className="skills-grid reveal">
          {categories.map(cat => (
            <div className="skill-category" key={cat.title}>
              <h3>{cat.title}</h3>
              <div className="skill-pills">
                {cat.pills.map(p => (
                  <span key={p} className={`pill${cat.active ? ' active-pill' : ''}`}>{p}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skill-bars reveal skills-bars-wrap">
          {bars.map(b => (
            <div className="skill-bar-item" key={b.label}>
              <div className="sb-label">
                <span>{b.label}</span>
                <span>{b.pct}%</span>
              </div>
              <div className="sb-track">
                <div
                  className="sb-fill"
                  style={{ width: animated ? `${b.pct}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
