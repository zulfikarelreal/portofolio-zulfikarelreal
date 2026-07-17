import { useEffect, useRef, useState } from 'react'
import './Contact.css'

const links = [
  { href: 'https://wa.me/6282123477891', icon: 'bx bxl-whatsapp', label: 'WhatsApp', val: '082123477891', cls: 'wa' },
  { href: 'mailto:zulkfikarelreal@gmail.com', icon: 'bx bx-envelope', label: 'Email', val: 'zulkfikarelreal@gmail.com', cls: 'em' },
  { href: 'https://linkedin.com/in/muhammad-agung-zulfikar', icon: 'bx bxl-linkedin', label: 'LinkedIn', val: 'muhammad-agung-zulfikar', cls: 'li' },
  { href: 'http://github.com/zulfikarelreal', icon: 'bx bxl-github', label: 'GitHub', val: 'zulfikarelreal', cls: 'gh' },
  { href: 'https://instagram.com/zulfikarelreal', icon: 'bx bxl-instagram', label: 'Instagram', val: '@zulfikarelreal', cls: 'ig' },
  { href: 'https://www.itemku.com/t/zulfikar-elreal', icon: 'bx bxs-store', label: 'Itemku Store', val: 'zulfikar-elreal', cls: 'ik' },
]

export default function Contact() {
  const sectionRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', msg: '' })

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Pesan dari Portfolio — ${form.name}`;
    const body = `Nama: ${form.name}\nEmail: ${form.email}\n\nPesan:\n${form.msg}`;
    window.location.href = `mailto:zulkfikarelreal@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="section contact" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="section-tag reveal">Get In Touch</div>
        <h2 className="section-title reveal">
          Let's <span className="accent">Work Together</span>
        </h2>
        <p className="contact-sub reveal">
          Reach out pada kontak dibawah ini jika anda memiliki kebutuhan atau
          informasi lebih lanjut.
        </p>

        <div className="contact-grid">
          <div className="contact-links">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card reveal cursor-target"
              >
                <div className={`cc-icon ${l.cls}`}>
                  <i className={l.icon}></i>
                </div>
                <div className="cc-info">
                  <span className="cc-label">{l.label}</span>
                  <span className="cc-val">{l.val}</span>
                </div>
                <i className="bx bx-chevron-right cc-arrow"></i>
              </a>
            ))}
          </div>

          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <h3>Send a Message</h3>
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
                required
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                rows={5}
                value={form.msg}
                onChange={(e) =>
                  setForm((f) => ({ ...f, msg: e.target.value }))
                }
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary full-btn cursor-target"
            >
              <i className="bx bx-envelope"></i>
              Send via Email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
