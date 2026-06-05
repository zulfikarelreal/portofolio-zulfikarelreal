import './Footer.css'

const navLinks = ['home','about','skills','experience','services','contact']
const socials = [
  { href: 'https://instagram.com/zulfikarelreal', label: 'IG', icon: '📸' },
  { href: 'https://wa.me/6282123477891', label: 'WA', icon: '📱' },
  { href: 'https://linkedin.com/in/muhammad-agung-zulfikar', label: 'Li', icon: '💼' },
  { href: 'http://github.com/zulfikarelreal', label: 'GH', icon: '🐙' },
]

export default function Footer() {
  const scroll = (id) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 75, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <button className="nav-logo footer-logo" onClick={() => scroll('home')}>
            zulfikar<span>.</span>
          </button>
          <div className="footer-links">
            {navLinks.map(id => (
              <button key={id} className="footer-link" onClick={() => scroll(id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Muhammad Agung Zulfikar · Demak, Jawa Tengah 🇮🇩</p>
          <div className="footer-socials">
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
