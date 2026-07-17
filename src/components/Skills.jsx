// Skills.jsx

import { useEffect, useRef, useState } from "react";
import "./Skills.css";

const categories = [
  {
    title: "CORE - IT & Teknis",
    pills: [
      "Troubleshoot PC / Laptop",
      "Repair PC / Laptop",
      "Instalasi OS (Windows, Linux & Other)",
      "Rakit PC / Laptop",
      "Network Config",
      "Repair Printer BROTHER"
    ],
    active: true,
  },
  {
    title: "Web Dev",
    pills: ["HTML5", "CSS3", "JavaScript", "ReactJS", "Responsive Design"],
  },
  {
    title: "Tools & Platform",
    pills: [
      "Git & GitHub",
      "VS Code",
      "MS Word & Excel",
      "TradingView",
      "Itemku.com",
      "Shopee",
      "Tokopedia",
      "Editing Foto & Video",
      "Adobe Photoshop",
    ],
  },
  {
    title: "Lainnya",
    pills: [
      "Digital Marketing",
      "Analisis Teknikal Saham",
      "Bahasa Inggris",
      "Java (Basic)",
    ],
  },
];

const bars = [
  { label: "PC Troubleshooting & Maintenance", level: "Expert" },
  { label: "HTML & CSS", level: "Advanced" },
  { label: "Brother Printer & Device Support", level: "Advanced" },
  { label: "JavaScript", level: "Intermediate" },
  { label: "ReactJS", level: "Intermediate" },
  { label: "Git & GitHub", level: "Intermediate" },
  { label: "Stocks Technical Analysis", level: "Advanced" },
  { label: "Digital Marketing", level: "Advanced" },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            if (e.target.classList.contains("skills-bars-wrap") && !animated) {
              setAnimated(true);
            }
          }
        });
      },
      { threshold: 0.15 },
    );
    sectionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [animated]);

  return (
    <section className="section skills" id="skills" ref={sectionRef}>
      <div className="container">
        <div className="section-tag reveal">Tech Stack</div>
        <h2 className="section-title reveal">
          My <span className="accent">Skills</span>
        </h2>

        <div className="skills-grid reveal">
          {categories.map((cat) =>
            cat.active ? (
              <div className="skill-category core-card" key={cat.title}>
                {/* <div className="core-inner"> */}
                {/* <div className="core-badge">CORE</div> */}
                <h3>{cat.title}</h3>
                <div className="skill-pills">
                  {cat.pills.map((p) => (
                    <span key={p} className="pill active-pill">
                      {p}
                    </span>
                  ))}
                </div>
                {/* </div> */}
              </div>
            ) : (
              <div className="skill-category" key={cat.title}>
                <h3>{cat.title}</h3>
                <div className="skill-pills">
                  {cat.pills.map((p) => (
                    <span key={p} className="pill">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>

        <div className="skill-bars reveal skills-bars-wrap">
          {bars.map((b) => (
            <div className="skill-bar-item" key={b.label}>
              <div className="sb-label">
                <span>{b.label}</span>
                <span className={`level-badge level-${b.level.toLowerCase()}`}>
                  {b.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
