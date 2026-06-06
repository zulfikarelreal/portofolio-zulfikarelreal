import { Suspense, Component } from 'react'
import Lanyard from './Lanyard'
import './LanyardSection.css'

// Error boundary mencegah Lanyard crash merusak seluruh halaman
class LanyardErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="lanyard-loading">
          <i className='bx bx-error-circle' style={{ fontSize: 36, color: 'var(--accent)' }}></i>
          <span>3D card tidak dapat dimuat. Pastikan browser mendukung WebGL.</span>
        </div>
      )
    }
    return this.props.children
  }
}

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
        <LanyardErrorBoundary>
          <Suspense fallback={
            <div className="lanyard-loading">
              <div className="lanyard-spinner"></div>
              <span>Loading 3D card...</span>
            </div>
          }>
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </Suspense>
        </LanyardErrorBoundary>
      </div>
    </section>
  )
}
