import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'
import CertModal from './components/CertModal'
import Cursor from './components/Cursor'
import './styles/index.css'

export default function App() {
  const [theme, setTheme] = useState('light')
  const [certModal, setCertModal] = useState(null)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light')

  return (
    <div className="app">
      <Cursor />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Experience onOpenCert={setCertModal} />
      <Services />
      <Contact />
      <Footer />
      <ScrollTop />
      {certModal && (
        <CertModal cert={certModal} onClose={() => setCertModal(null)} />
      )}
    </div>
  )
}
