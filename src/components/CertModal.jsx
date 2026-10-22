import { useEffect } from 'react'
import './CertModal.css'

const isPdf = (src) => /\.pdf(\?|#|$)/i.test(src || '')

export default function CertModal({ cert, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const pdf = isPdf(cert.img)

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box" style={pdf ? { maxWidth: 760 } : undefined}>
        <div className="modal-header">
          <h3>{cert.title}</h3>
          <button className="modal-close" onClick={onClose} aria-label="Tutup">
            <i className="bx bx-x"></i>
          </button>
        </div>
        <div className="modal-img-wrap">
          {pdf ? (
            <iframe
              src={cert.img}
              title={cert.title}
              style={{ width: '100%', height: '60vh', border: 0, borderRadius: 4 }}
            />
          ) : (
            <img
              src={cert.img}
              alt={cert.title}
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextElementSibling.style.display = 'flex'
              }}
            />
          )}
          {!pdf && (
            <div className="modal-img-placeholder" style={{ display: 'none' }}>
              <i className="bx bx-image" style={{ fontSize: 48, color: 'var(--accent)' }}></i>
              <span>Gambar belum tersedia</span>
            </div>
          )}
        </div>
        <div className="modal-footer">
          <span>{cert.title}</span>
          <a href={cert.img} download className="btn btn-ghost" style={{ padding: '8px 18px', fontSize: 13 }}>
            <i className="bx bx-download"></i> Unduh
          </a>
        </div>
      </div>
    </div>
  )
}
