'use client'

import { useReveal } from '@/hooks/useReveal'
import { PRIMARY_PHONE } from '@/lib/data'
import { wppLink } from '@/lib/whatsapp'

const WppIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

export default function CtaBanner() {
  const titleRef = useReveal()
  const href = wppLink(PRIMARY_PHONE, 'Olá! Vim pelo site e quero transformar meu projeto com madeira de qualidade!')

  return (
    <section
      id="cta"
      className="relative text-cream-base overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgba(45,19,8,0.85), rgba(26,12,4,0.95))',
        padding: '140px 0',
        borderTop: '1px solid rgba(207,143,58,0.2)',
        borderBottom: '1px solid rgba(207,143,58,0.2)',
      }}
    >
      {/* Diagonal texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(135deg, rgba(224,180,106,0.04) 0, rgba(224,180,106,0.04) 1px, transparent 1px, transparent 50px)',
        }}
        aria-hidden="true"
      />

      {/* Radial amber glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: -200, left: '50%', transform: 'translateX(-50%)',
          width: 800, height: 800,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(207,143,58,0.08), transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div
        className="relative"
        style={{ maxWidth: 1100, margin: '0 auto', padding: '0 88px', textAlign: 'center' }}
      >
        {/* Marker with hyphens */}
        <div
          className="inline-flex items-center gap-[14px] font-mono text-amber-light"
          style={{
            fontSize: 10, letterSpacing: '0.32em', textTransform: 'uppercase',
            opacity: 0.7, marginBottom: 32,
          }}
        >
          <span style={{ width: 36, height: 1, background: 'var(--amber-base)', display: 'inline-block' }} />
          Pronto para começar?
          <span style={{ width: 36, height: 1, background: 'var(--amber-base)', display: 'inline-block' }} />
        </div>

        <h2
          ref={titleRef}
          className="reveal font-cormorant font-[500] text-cream-base cta-title-size"
          style={{ marginBottom: 36 }}
        >
          Transforme seu projeto<br />
          com quem entende de{' '}
          <em className="madeira-word text-amber-light italic">
            madeira
            <svg
              className="madeira-underline"
              viewBox="0 0 220 14"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                className="madeira-underline-path"
                d="M3,9 Q 40,3 80,7 T 160,6 Q 195,4 217,8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </em>.
        </h2>

        <p
          className="font-dmsans font-light text-cream-base/65 mx-auto"
          style={{ fontSize: 17, lineHeight: 1.7, maxWidth: 520, marginBottom: 44 }}
        >
          Fale agora com nossa equipe. Orçamento rápido, atendimento personalizado
          e os melhores preços do Espírito Santo.
        </p>

        <div className="flex justify-center flex-wrap" style={{ gap: 14 }}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar orçamento via WhatsApp"
            className="inline-flex items-center gap-3 text-white font-dmsans font-bold transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: '#25d366',
              border: '1px solid #25d366',
              padding: '20px 32px',
              fontSize: 11,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              borderRadius: 2,
              textDecoration: 'none',
            }}
          >
            <WppIcon />
            Solicitar orçamento
          </a>
          <a className="btn-ghost" href="#lojas">
            Ver nossas lojas
            <ArrowIcon />
          </a>
        </div>
      </div>

      <style>{`
        /* Hand-drawn underline that draws itself when in view */
        .madeira-word {
          position: relative;
          display: inline-block;
          color: var(--amber-light);
        }
        .madeira-underline {
          position: absolute;
          left: -2%;
          right: -2%;
          width: 104%;
          bottom: -0.18em;
          height: 0.32em;
          overflow: visible;
          color: var(--amber-base);
          pointer-events: none;
        }
        .madeira-underline-path {
          stroke-dasharray: 260;
          stroke-dashoffset: 260;
          filter: drop-shadow(0 0 6px rgba(207,143,58,0.35));
          transition: stroke-dashoffset 1.4s cubic-bezier(0.65, 0, 0.35, 1) 0.55s;
        }
        h2.reveal.visible .madeira-underline-path {
          stroke-dashoffset: 0;
        }

        @media (max-width: 1100px) {
          #cta > div:last-child { padding-left: 32px !important; padding-right: 32px !important; }
        }
        @media (max-width: 640px) {
          #cta { padding: 80px 0 !important; }
          #cta > div:last-child { padding-left: 20px !important; padding-right: 20px !important; }
          .madeira-underline { bottom: -0.14em; height: 0.26em; }
        }

        @media (prefers-reduced-motion: reduce) {
          .madeira-underline-path {
            stroke-dashoffset: 0 !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  )
}
