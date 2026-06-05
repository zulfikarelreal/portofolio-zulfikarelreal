import { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['home','about','skills','experience','services','contact']

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = document.querySelectorAll('section[id]')
      const y = window.scrollY + 120
      sections.forEach(s => {
        if (y >= s.offsetTop && y < s.offsetTop + s.offsetHeight) {
          setActive(s.id)
        }
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 75
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <button className="nav-logo" onClick={() => handleClick('home')}>
        zulfikar<span>.</span>
      </button>

      <ul className={`nav-links${open ? ' open' : ''}`}>
        {links.map(id => (
          <li key={id}>
            <button
              className={`nav-link${active === id ? ' active' : ''}`}
              onClick={() => handleClick(id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {theme === 'light'
            ? <i className='bx bx-moon'></i>
            : <i className='bx bx-sun'></i>
          }
        </button>

        <button
          className={`hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          <span/><span/><span/>
        </button>
      </div>
    </nav>
  )
}
