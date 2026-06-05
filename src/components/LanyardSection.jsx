import { Suspense } from 'react'
import Lanyard from './Lanyard'
import './LanyardSection.css'

export default function LanyardSection() {
  return (
    <section className="section lanyard-section" id="lanyard">
      <div className="container">
        <div className="section-tag">Interactive</div>
        <h2 className="section-title">
          Drag the <span className="accent">Card</span>
        </h2>
        <p className="lanyard-desc">
          Kartu interaktif yang bisa kamu tarik dan ayunkan. Klik dan drag!
        </p>
      </div>

      <div className="lanyard-canvas-wrap">
        <Suspense fallback={
          <div className="lanyard-loading">
            <div className="lanyard-spinner"></div>
            <span>Loading 3D card...</span>
          </div>
        }>
          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        </Suspense>
      </div>
    </section>
  )
}
