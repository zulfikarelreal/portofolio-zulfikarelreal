import { useEffect, useRef } from 'react'
import './About.css'

const stats = [
  { num: '4+', label: 'tahun jadi teknisi' },
  { num: '6+', label: 'tahun digital marketing' },
  { num: '7++', label: 'pengalaman kerja' },
  { num: '20 rb+', label: 'transaksi toko online' },
  { num: '3,93', label: 'IPK saat ini' },
]

const cards = [
  { icon: 'bx bxs-graduation', title: 'Pendidikan', href: 'https://unimus.ac.id/', desc: 'S1 Informatika, UNIMUS', sub: '2024 – sekarang' },
  { icon: 'bx bxs-map', title: 'Lokasi', desc: 'Mranggen, Demak, Jawa Tengah' },
  { icon: 'bx bxs-store', title: 'Toko online', href: 'https://www.itemku.com/t/zulfikar-elreal', desc: 'Itemku ↗' },
  { icon: 'bx bxs-envelope', title: 'Email', href: 'mailto:zulkfikarelreal@gmail.com', desc: 'zulkfikarelreal@gmail.com' },
]

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const toContact = () => {
    const el = document.getElementById('contact')
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 75, behavior: 'smooth' })
  }

  return (
    <section className="section about" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title reveal">Teknisi yang suka banyak hal</h2>
            <p className="reveal">
              Saya Customer Service Engineer di Brother Customer Care Center Semarang
              (PT Teknika Sarana Gardian), menangani perbaikan, pemeliharaan, dan
              troubleshooting printer serta kendala teknis pelanggan.
            </p>
            <p className="reveal">
              Di luar kerja, saya mahasiswa S1 Informatika kelas karyawan di Universitas
              Muhammadiyah Semarang, semester 5, IPK 3,93/4,00. Pengalaman saya: lebih dari
              4 tahun di teknis komputer dan perangkat keras, serta lebih dari 6 tahun di
              penjualan dan pemasaran digital. Saya terbiasa bekerja sendiri maupun dalam tim.
            </p>
            <div className="about-stats reveal">
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <span className="stat-num">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
            {/* <button className="btn btn-primary reveal cursor-target" onClick={toContact}>
              Hubungi saya
            </button> */}
          </div>

          <div className="about-cards">
            {cards.map((c) => (
              <div className="info-card reveal cursor-target" key={c.title}>
                <span className="card-icon"><i className={c.icon}></i></span>
                <div>
                  <h4>{c.title}</h4>
                  {c.href ? (
                    <p>
                      <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                        {c.desc}
                      </a>
                    </p>
                  ) : (
                    <>
                      <p>{c.desc}</p>
                      {c.sub && <small>{c.sub}</small>}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
