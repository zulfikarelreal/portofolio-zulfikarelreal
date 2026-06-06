import { useState, useEffect, useRef, Component } from "react";
import { StaggeredMenu } from "./components/StaggeredMenu";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Contact from "./components/Contact";
import LanyardSection from "./components/LanyardSection";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import CertModal from "./components/CertModal";
// import Cursor from "./components/Cursor";
import TargetCursor from "./components/TargetCursor";
import "./styles/index.css";

const menuItems = [
  { label: "Home", ariaLabel: "Ke halaman Home", link: "#home" },
  { label: "About", ariaLabel: "Tentang saya", link: "#about" },
  { label: "Skills", ariaLabel: "Keahlian saya", link: "#skills" },
  { label: "Experience", ariaLabel: "Pengalaman saya", link: "#experience" },
  { label: "Services", ariaLabel: "Layanan saya", link: "#services" },
  { label: "Contact", ariaLabel: "Hubungi saya", link: "#contact" },
];

const socialItems = [
  { label: "Instagram", link: "https://instagram.com/zulfikarelreal" },
  { label: "WhatsApp", link: "https://wa.me/6282123477891" },
  {
    label: "LinkedIn",
    link: "https://linkedin.com/in/muhammad-agung-zulfikar",
  },
  { label: "GitHub", link: "http://github.com/zulfikarelreal" },
];

class AppErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            fontFamily: "sans-serif",
            padding: 32,
            background: "#060a14",
            color: "#e2e8f8",
          }}
        >
          <h2 style={{ color: "#60a5fa" }}>Something went wrong</h2>
          <p style={{ color: "#7a8fb8", maxWidth: 480, textAlign: "center" }}>
            {this.state.error?.message || "Terjadi error yang tidak terduga."}
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: "10px 24px",
              background: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              fontSize: 14,
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function AppContent() {
  const [theme, setTheme] = useState("light");
  const [certModal, setCertModal] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileScrolled, setMobileScrolled] = useState(false);
  const menuCloseRef = useRef(null);
  const mobileNavRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  // Scroll listener untuk mobile nav background
  useEffect(() => {
    const onScroll = () => {
      setMobileScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Anchor click handler untuk close menu & smooth scroll
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      e.preventDefault();

      // Tutup menu dulu
      if (menuCloseRef.current) menuCloseRef.current();

      const id = target.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          const top = el.getBoundingClientRect().top + window.pageYOffset - 75;
          window.scrollTo({ top, behavior: "smooth" });
        }, 320);
      }
    };
    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  // Class string untuk mobile nav header
  const mobileNavClass = [
    "mobile-nav-header",
    mobileScrolled ? "scrolled" : "",
    mobileMenuOpen ? "menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="app">
      {/* <Cursor /> */}
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />

      {/* Desktop */}
      <div className="desktop-nav">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
      </div>

      {/* Mobile */}
      <div className="mobile-nav">
        {/* Header: logo + theme toggle — disembunyikan saat menu open */}
        <div className={mobileNavClass} ref={mobileNavRef}>
          <button
            className="mobile-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            zulfikar<span>.</span>
          </button>
          <button
            className="mobile-theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <i className="bx bx-moon"></i>
            ) : (
              <i className="bx bx-sun"></i>
            )}
          </button>
        </div>

        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor={theme === "dark" ? "#e2e8f8" : "#0f1729"}
          openMenuButtonColor="#ffffff"
          changeMenuColorOnOpen={true}
          colors={["rgba(37,99,235,0.85)", "rgba(37,99,235,0.97)"]}
          logoUrl={null}
          accentColor="var(--accent)"
          isFixed={true}
          onMenuOpen={() => setMobileMenuOpen(true)}
          onMenuClose={() => setMobileMenuOpen(false)}
          getCloseHandler={(fn) => {
            menuCloseRef.current = fn;
          }}
        />
      </div>

      <Hero />
      <About />
      <Skills />
      <Experience onOpenCert={setCertModal} />
      <Services />
      <Contact />
      <LanyardSection />
      <Footer />
      <ScrollTop />

      {certModal && (
        <CertModal cert={certModal} onClose={() => setCertModal(null)} />
      )}
    </div>
  );
}

export default function App() {
  return (
    <AppErrorBoundary>
      <AppContent />
    </AppErrorBoundary>
  );
}
