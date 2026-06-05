import { useEffect } from 'react'
import './CertModal.css'

export default function CertModal({ cert, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <div className="modal-header">
          <h3>{cert.title}</h3>
          <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="modal-img-wrap">
          <img
            src={cert.img}
            alt={cert.title}
            onError={e => {
              e.target.style.display = 'none'
              e.target.nextElementSibling.style.display = 'flex'
            }}
          />
          <div className="modal-img-placeholder" style={{ display: 'none' }}>
            <span style={{ fontSize: 40 }}>🖼️</span>
            <span>Gambar belum tersedia</span>
          </div>
        </div>
        <div className="modal-footer">
          <span>{cert.title}</span>
          <a href={cert.img} download className="btn btn-ghost" style={{ padding: '8px 18px', fontSize: 13 }}>
            ⬇ Download
          </a>
        </div>
      </div>
    </div>
  )
}
