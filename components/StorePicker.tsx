'use client'

import { useEffect, type ReactNode } from 'react'
import { STORES } from '@/lib/data'
import { wppLink } from '@/lib/whatsapp'

const WppIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

type Props = {
  open: boolean
  onClose: () => void
  message: string
  title?: ReactNode
  subtitle?: ReactNode
}

export default function StorePicker({ open, onClose, message, title, subtitle }: Props) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="sp-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Escolha a loja"
      onClick={onClose}
    >
      <div className="sp-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="sp-close" onClick={onClose} aria-label="Fechar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div
          className="font-mono"
          style={{ fontSize: 10, letterSpacing: '0.3em', color: 'var(--amber-light)', textTransform: 'uppercase', marginBottom: 14, display: 'inline-flex', alignItems: 'center', gap: 12 }}
        >
          <span style={{ width: 24, height: 1, background: 'var(--amber-base)' }} />
          Orçamento via WhatsApp
        </div>

        <h2 className="font-cormorant font-[500] text-cream-base sp-title">
          {title ?? <>Escolha a <em className="italic text-amber-light">loja</em>.</>}
        </h2>

        <p className="font-dmsans font-light text-cream-base/65 sp-subtitle">
          {subtitle ?? 'Fale com a unidade Marion mais próxima de você.'}
        </p>

        <div className="sp-grid">
          {STORES.map((s) => (
            <a
              key={s.phone}
              href={wppLink(s.phone, message)}
              target="_blank"
              rel="noopener noreferrer"
              className="sp-card"
            >
              <div className="sp-card-head">
                <span className="font-mono sp-card-index">{s.index}</span>
                {s.tag && <span className="font-mono sp-card-tag">{s.tag}</span>}
              </div>
              <div className="font-cormorant sp-card-city">
                {s.cityItalic ? <em className="italic text-amber-light">{s.city}</em> : s.city}
              </div>
              <div className="font-dmsans sp-card-address">{s.address}</div>
              <span className="sp-card-cta font-dmsans">
                <WppIcon />
                {s.display}
              </span>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .sp-overlay {
          position: fixed;
          inset: 0;
          z-index: 100;
          background: rgba(10,5,2,0.78);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: sp-fade 0.2s ease;
        }
        .sp-modal {
          position: relative;
          width: 100%;
          max-width: 880px;
          max-height: calc(100vh - 48px);
          overflow-y: auto;
          background:
            radial-gradient(ellipse at top left, rgba(207,143,58,0.10), transparent 60%),
            rgba(26,12,4,0.98);
          border: 1px solid rgba(207,143,58,0.30);
          border-radius: 2px;
          padding: 36px 36px 32px;
          box-shadow: 0 30px 80px rgba(0,0,0,0.6);
          animation: sp-up 0.25s ease;
        }
        .sp-modal::before {
          content: "";
          position: absolute;
          top: -1px; left: 24px; right: 24px;
          height: 2px;
          background: var(--amber-base);
        }
        .sp-close {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 36px;
          height: 36px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 1px solid rgba(207,143,58,0.25);
          color: var(--cream-base);
          cursor: pointer;
          border-radius: 2px;
          transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;
        }
        .sp-close:hover {
          border-color: rgba(207,143,58,0.6);
          color: var(--amber-light);
          background: rgba(207,143,58,0.08);
        }
        .sp-title {
          font-size: clamp(26px, 3vw, 34px);
          line-height: 1.1;
          margin-bottom: 8px;
        }
        .sp-subtitle {
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 26px;
          max-width: 520px;
        }
        .sp-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .sp-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 20px 22px 22px;
          background: rgba(20,10,4,0.55);
          border: 1px solid rgba(207,143,58,0.20);
          text-decoration: none;
          color: inherit;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .sp-card:hover {
          transform: translateY(-2px);
          border-color: rgba(207,143,58,0.55);
          box-shadow:
            0 0 0 1px rgba(207,143,58,0.30),
            0 0 22px rgba(207,143,58,0.14),
            0 12px 32px rgba(0,0,0,0.4);
        }
        .sp-card-head {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }
        .sp-card-index {
          font-size: 10px;
          letter-spacing: 0.3em;
          color: var(--amber-light);
          opacity: 0.7;
        }
        .sp-card-tag {
          font-size: 9px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--amber-base);
          padding: 3px 8px;
          border: 1px solid rgba(207,143,58,0.45);
          border-radius: 2px;
        }
        .sp-card-city {
          font-size: 26px;
          line-height: 1.15;
          font-weight: 500;
          color: var(--cream-base);
          margin-bottom: 6px;
        }
        .sp-card-address {
          font-size: 12.5px;
          line-height: 1.55;
          color: rgba(244,234,214,0.55);
          margin-bottom: 16px;
          flex-grow: 1;
        }
        .sp-card-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 600;
          color: var(--amber-light);
          padding-top: 14px;
          border-top: 1px solid rgba(207,143,58,0.18);
        }
        .sp-card-cta svg { color: #25d366; }

        @keyframes sp-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes sp-up {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 720px) {
          .sp-modal { padding: 28px 22px 22px; }
          .sp-grid { grid-template-columns: 1fr; }
          .sp-card-city { font-size: 22px; }
        }
      `}</style>
    </div>
  )
}
