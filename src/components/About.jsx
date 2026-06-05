import { useEffect, useRef } from 'react'
import './About.css'

const stats = [
  { num: '3+', label: 'Tahun Jadi Teknisi' },
  { num: '6+', label: 'Tahun Digital Marketing' },
  { num: '3.88', label: 'IPK Saat Ini' },
]

const cards = [
  { icon: '🎓', title: 'Pendidikan', desc: 'S1 Informatika – UNIMUS', sub: '2024 – Sekarang' },
  { icon: '📍', title: 'Lokasi', desc: 'Demak, Jawa Tengah 🇮🇩' },
  { icon: '🛒', title: 'E-Commerce', href: 'https://www.itemku.com/t/zulfikar-elreal', desc: 'Itemku Store ↗' },
  { icon: '✉️', title: 'Email', href: 'mailto:zulkfikarelreal@gmail.com', desc: 'zulkfikarelreal@gmail.com' },
]

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting))
      }, { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="section about" id="about" ref={sectionRef}>
      <div className="container">
        <div className="section-tag reveal">About Me</div>
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title reveal">
              Teknisi Computer <span className="accent">yang suka banyak hal</span>
            </h2>
            <p className="reveal">
              Saya adalah mahasiswa S1 Informatika (Kelas Sore) di Universitas Muhammadiyah
              Semarang semester 4 dengan IPK 3,88/4,00. Fokus saya di web development —
              terutama HTML, CSS, dan JavaScript.
            </p>
            <p className="reveal">
              Saya juga punya pengalaman lebih dari 3 tahun sebagai teknisi komputer
              (perakitan, instalasi OS, troubleshooting) dan 6+ tahun di digital marketing
              sejak SMP. Terbiasa kerja mandiri maupun dalam tim.
            </p>
            <div className="about-stats reveal">
              {stats.map(s => (
                <div className="stat" key={s.label}>
                  <span className="stat-num">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
            <button
              className="btn btn-primary reveal"
              onClick={() => {
                const el = document.getElementById('contact')
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 75, behavior: 'smooth' })
              }}
            >
              Let's Connect
            </button>
          </div>

          <div className="about-cards">
            {cards.map(c => (
              <div className="info-card reveal" key={c.title}>
                <span className="card-icon">{c.icon}</span>
                <div>
                  <h4>{c.title}</h4>
                  {c.href
                    ? <p><a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{c.desc}</a></p>
                    : <><p>{c.desc}</p>{c.sub && <small>{c.sub}</small>}</>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
