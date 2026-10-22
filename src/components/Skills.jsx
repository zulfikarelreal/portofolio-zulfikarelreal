import { useEffect, useRef } from 'react'
import './Skills.css'

const categories = [
  {
    title: 'Teknis (keahlian utama)',
    core: true,
    pills: [
      'Troubleshooting hardware & software',
      'Repair & maintenance printer, scanner, P-touch Brother',
      'Perbaikan, rakit, maintenance PC/laptop',
      'Instalasi OS (Windows/Linux)',
      'Konfigurasi jaringan',
    ],
  },
  { title: 'Web development', pills: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'NextJS', 'Responsive design'] },
  {
    title: 'Tools & platform',
    pills: ['Git & GitHub', 'VS Code', 'MS Word & Excel', 'TradingView', 'Itemku', 'Shopee', 'Tokopedia', 'Editing gambar & video', 'Adobe Photoshop'],
  },
  {
    title: 'Lainnya',
    pills: ['Customer service', 'Digital marketing & online advertising', 'Dasar analisis teknikal saham', 'Bahasa Inggris', 'Java (dasar)'],
  },
]

const bars = [
  { label: 'PC troubleshooting & maintenance', level: 'Expert' },
  { label: 'Brother printer & device support', level: 'Advanced' },
  { label: 'HTML & CSS', level: 'Advanced' },
  { label: 'Digital marketing', level: 'Advanced' },
  { label: 'Analisis teknikal saham', level: 'Advanced' },
  { label: 'JavaScript', level: 'Intermediate' },
  { label: 'ReactJS', level: 'Intermediate' },
  { label: 'NextJS', level: 'Intermediate' },
  { label: 'Git & GitHub', level: 'Intermediate' },
]

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="section skills" id="skills" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title reveal">Keahlian</h2>

        <div className="skills-grid reveal">
          {categories.map((cat) => (
            <div className={`skill-category${cat.core ? ' core-card' : ''}`} key={cat.title}>
              <h3>{cat.title}</h3>
              <div className="skill-pills">
                {cat.pills.map((p) => (
                  <span key={p} className={`pill${cat.core ? ' active-pill' : ''}`}>{p}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skill-bars reveal skills-bars-wrap">
          {bars.map((b) => (
            <div className="skill-bar-item" key={b.label}>
              <div className="sb-label">
                <span>{b.label}</span>
                <span className={`level-badge level-${b.level.toLowerCase()}`}>{b.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
