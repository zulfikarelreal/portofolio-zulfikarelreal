import { useEffect, useRef } from 'react'
import cvFile from '../assets/CV - Muhammad Agung Zulfikar.pdf'
import certIsms from '../assets/cert-isms.jpg'
import certJavaFund from '../assets/cert-java-fundamentals.jpg'
import certJavaProg from '../assets/cert-java-programming.jpg'
import certBnsp from '../assets/cert-bnsp.jpg'
import './Experience.css'

const timeline = [
  {
    date: '2024 – Sekarang', tag: 'edu', tagLabel: 'Pendidikan',
    title: 'S1 Informatika',
    company: 'Universitas Muhammadiyah Semarang (Kelas Sore)',
    desc: 'IPK 3.88 / 4.00 — Semester 4 On Going',
  },
  {
    date: 'Agu 2022 – Feb 2026', tag: 'work', tagLabel: 'Pengalaman Kerja',
    title: 'Teknisi & Marketing',
    company: 'Home Computer Semarang',
    items: [
      'Perakitan PC, Instalasi OS & quality control hardware',
      'Konsultasi spesifikasi komputer sesuai kebutuhan pelanggan',
      'Desain konten foto & video untuk promosi produk',
      'Mengelola pemasaran digital dan iklan online',
    ],
  },
  {
    date: '2019 – 2023', tag: 'work', tagLabel: 'Pengalaman Kerja',
    title: 'Owner — Toko Voucher Games',
    company: 'Zulfikar Elreal (Itemku & Shopee)',
    companyHref: 'https://www.itemku.com/t/zulfikar-elreal',
    items: [
      'Mengelola penjualan voucher game via e-commerce & sosmed',
      'Listing produk, promosi online, dan pelayanan pelanggan',
      'Operasional harian toko online secara mandiri',
    ],
  },
  {
    date: 'Juni – Des 2021', tag: 'intern', tagLabel: 'Magang',
    title: 'Magang Teknisi',
    company: 'Rajawali Com',
    items: [
      'Perakitan, instalasi dan maintenance PC / Laptop',
      'Quality check hardware & pelayanan customer',
    ],
  },
  {
    date: '2019 – 2022', tag: 'edu', tagLabel: 'Pendidikan',
    title: 'Teknik Komputer dan Jaringan',
    company: 'SMK Negeri 5 Semarang',
  },
]

const certs = [
  { icon: 'bx bxs-shield-alt-2', title: 'ISMS ISO 27001:2022', desc: 'Certificate of Participation – Information Security Management System', img: certIsms },
  { icon: 'bx bxl-java', title: 'Java Fundamentals', desc: 'Award of Final Exam Completion – Oracle Academy', img: certJavaFund },
  { icon: 'bx bx-code-block', title: 'Java Programming (English)', desc: 'Award of Completion – Programming Course', img: certJavaProg },
  { icon: 'bx bxs-award', title: 'BNSP – KKNI Level II', desc: 'Sertifikat Kompetensi Konfigurasi Perangkat Jaringan Komputer', img: certBnsp },
]

export default function Experience({ onOpenCert }) {
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
    <section className="section experience" id="experience" ref={sectionRef}>
      <div className="container">
        <div className="section-tag reveal">Perjalanan Saya</div>
        <h2 className="section-title reveal">Experience & <span className="accent">Education</span></h2>

        <div className="timeline">
          {timeline.map((item, i) => (
            <div className="timeline-item reveal" key={i}>
              <div className="tl-dot"/>
              <div className="tl-date">{item.date}</div>
              <div className="tl-card">
                <span className={`tl-tag ${item.tag}`}>{item.tagLabel}</span>
                <h3>{item.title}</h3>
                <p className="tl-company">
                  {item.companyHref
                    ? <a href={item.companyHref} target="_blank" rel="noopener noreferrer">{item.company} ↗</a>
                    : item.company
                  }
                </p>
                {item.desc && <p className="tl-desc">{item.desc}</p>}
                {item.items && (
                  <ul className="tl-list">
                    {item.items.map(li => <li key={li}>{li}</li>)}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CERTIFICATES */}
        <div className="cert-section">
          <h3 className="cert-title reveal">Sertifikat <span className="accent">&amp; Penghargaan</span></h3>
          <div className="cert-grid">
            {certs.map(c => (
              <div
                className="cert-card reveal"
                key={c.title}
                onClick={() => onOpenCert({ title: c.title, img: c.img })}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && onOpenCert({ title: c.title, img: c.img })}
              >
                <span className="cert-icon"><i className={c.icon}></i></span>
                <div>
                  <h4>{c.title}</h4>
                  <p>{c.desc}</p>
                </div>
                <span className="cert-badge">Lihat</span>
              </div>
            ))}
          </div>

          {/* CV BAR */}
          <div className="cv-bar reveal">
            <div className="cv-bar-info">
              <h4>Curriculum Vitae</h4>
              <p>Muhammad Agung Zulfikar</p>
            </div>
            <div className="cv-bar-actions">
              <a
                href={cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <i className='bx bx-show'></i> View CV
              </a>
              <a
                href={cvFile}
                download="CV-Muhammad-Agung-Zulfikar.pdf"
                className="btn btn-primary"
              >
                <i className='bx bx-download'></i> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
