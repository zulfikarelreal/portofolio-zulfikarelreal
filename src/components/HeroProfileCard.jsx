import { useRef } from 'react'
import './HeroProfileCard.css'

export default function HeroProfileCard({ imgSrc }) {
  const shimmerRef = useRef(null)

  const handleMouseEnter = () => {
    const el = shimmerRef.current
    if (!el) return
    el.style.animation = 'none'
    void el.offsetWidth
    el.style.animation = 'shimmerSweep 0.75s ease forwards'
  }

  return (
    <div className="hpc-frame" onMouseEnter={handleMouseEnter}>
      {/* Orbiting rings */}
      <div className="hpc-ring hpc-ring-outer" />
      <div className="hpc-ring hpc-ring-inner" />

      {/* Orbit glow dots */}
      <span className="hpc-dot hpc-dot-top" />
      <span className="hpc-dot hpc-dot-bottom" />
      <span className="hpc-dot hpc-dot-right" />

      {/* Corner bracket ornaments */}
      <span className="hpc-corner hpc-corner-tl" />
      <span className="hpc-corner hpc-corner-tr" />
      <span className="hpc-corner hpc-corner-bl" />
      <span className="hpc-corner hpc-corner-br" />

      {/* Floating label tags */}
      <span className="hpc-tag hpc-tag-right">Web Dev</span>
      <span className="hpc-tag hpc-tag-left">IT Tech</span>

      {/* Main card — organic blob shape */}
      <div className="hpc-card">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt="Muhammad Agung Zulfikar"
            className="hpc-img"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextElementSibling.style.display = "flex";
            }}
          />
        ) : null}
        <div
          className="hpc-fallback"
          style={{ display: imgSrc ? "none" : "flex" }}
        >
          Z
        </div>
        <div className="hpc-gloss" />
        <div className="hpc-shimmer" ref={shimmerRef} />
      </div>

      {/* Bottom status badge */}
      <span className="hpc-badge">● Available</span>
    </div>
  );
}
