import BlurText from "./BlurText";
import HeroProfileCard from "./HeroProfileCard";
import "./Hero.css";

import profileImgUrl from "../assets/profile.jpg?url";

export default function Hero() {
  const scroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 75;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="grid-lines" />
      </div>

      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for Work
          </div>

          <h1 className="hero-title">
            <span className="line-reveal hi">Hi, I'm</span>
            <BlurText
              text="Muhammad Agung"
              delay={120}
              animateBy="words"
              direction="top"
              className="blur-name-sub"
              stepDuration={0.4}
            />
            <BlurText
              text="Zulfikar"
              delay={150}
              animateBy="words"
              direction="top"
              className="blur-name-accent"
              stepDuration={0.45}
            />
          </h1>

          <p className="hero-role">
            <span className="role-accent">Computer Technician</span>
            <span className="role-sep">|</span>
            Informatics Student
          </p>

          <p className="hero-desc">
            "When you want something, all the universe conspires in helping you
            achieve it." <br /> — Paulo Coelho
          </p>

          <div className="hero-actions">
            <button
              className="btn btn-primary cursor-target"
              onClick={() => scroll("contact")}
            >
              <i className="bx bx-envelope"></i>
              Hire Me
            </button>
            <a
              href="https://wa.me/6282123477891"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost cursor-target"
            >
              <i className="bx bxl-whatsapp"></i>
              Chat Now
            </a>
          </div>
        </div>

        {/* Profile Card */}
        <div className="hero-visual">
          <HeroProfileCard imgSrc={profileImgUrl} />
        </div>
      </div>

      <div className="hero-socials">
        <a
          href="https://instagram.com/zulfikarelreal"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          title="Instagram"
        >
          <i className="bx bxl-instagram"></i>
        </a>
        <a
          href="https://wa.me/6282123477891"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          title="WhatsApp"
        >
          <i className="bx bxl-whatsapp"></i>
        </a>
        <a
          href="https://linkedin.com/in/muhammad-agung-zulfikar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
        <a
          href="http://github.com/zulfikarelreal"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <i className="bx bxl-github"></i>
        </a>
      </div>

      <button className="scroll-down" onClick={() => scroll("about")}>
        <span>Scroll</span>
        <i className="bx bx-chevron-down"></i>
      </button>
    </section>
  );
}
