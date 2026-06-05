import { useEffect, useRef } from 'react'
import './Services.css'

const services = [
  {
    icon: 'bx bx-wrench',
    title: 'Servis & Rakit PC',
    desc: 'Perakitan PC custom, instalasi OS, troubleshooting hardware/software, dan maintenance rutin laptop/PC.',
    tag: 'IT Technician',
    featured: true,
  },
  {
    icon: 'bx bx-code-alt',
    title: 'Web Development',
    desc: 'Membuat website dari nol dengan HTML, CSS, dan JavaScript yang clean, fast, dan responsif di semua device.',
    tag: 'HTML · CSS · JS',
  },
  {
    icon: 'bx bx-mobile-alt',
    title: 'Responsive Design',
    desc: 'Memastikan tampilan website kamu perfect di HP, tablet, maupun desktop. No more broken layouts.',
    tag: 'UI/UX',
  },
  {
    icon: 'bx bx-trending-up',
    title: 'Digital Marketing',
    desc: 'Bantu bisnis kamu grow secara online — dari konten sosmed, iklan, sampai manajemen toko e-commerce.',
    tag: 'Marketing',
  },
]

export default function Services() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="section services" id="services" ref={sectionRef}>
      <div className="container">
        <div className="section-tag reveal">What I Do</div>
        <h2 className="section-title reveal">My <span className="accent">Services</span></h2>
        <div className="services-grid">
          {services.map(s => (
            <div className={`service-card reveal${s.featured ? ' featured' : ''}`} key={s.title}>
              <div className="service-icon"><i className={s.icon}></i></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="service-tag">{s.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
