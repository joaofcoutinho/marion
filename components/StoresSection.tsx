'use client'

import { useReveal } from '@/hooks/useReveal'
import { STORES } from '@/lib/data'
import { wppLink } from '@/lib/whatsapp'

const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const PhoneIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 5.55 5.55l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
  </svg>
)

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

function StoreCard({ store, delay }: { store: typeof STORES[0]; delay: number }) {
  const ref = useReveal()
  const href = wppLink(store.phone, `Olá, vim pelo site! Quero falar com a loja de ${store.city}.`)
  const mapQuery = encodeURIComponent(`Marion Madeiras ${store.city}, ${store.address}`)
  const mapEmbed = `https://www.google.com/maps?q=${mapQuery}&output=embed&z=15`
  const mapLink  = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`

  return (
    <div
      ref={ref}
      className="reveal store-card group flex flex-col transition-all duration-300"
      style={{ border: '1px solid rgba(207,143,58,0.18)', background: 'rgba(255,255,255,0.02)', transitionDelay: `${delay}ms` }}
    >
      <a
        href={mapLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir mapa da loja de ${store.city} no Google Maps`}
        className="store-map-link relative block overflow-hidden"
        style={{ height: 200, borderBottom: '1px solid rgba(207,143,58,0.18)' }}
      >
        <iframe
          src={mapEmbed}
          title={`Mapa da loja Marion em ${store.city}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="store-map-iframe"
          style={{ border: 0, width: '100%', height: '100%', filter: 'grayscale(0.35) contrast(0.95)', pointerEvents: 'none' }}
          aria-hidden="true"
        />
        <span className="store-map-overlay" aria-hidden="true" />
        <span className="store-map-hint font-mono">
          <PinIcon />
          Abrir no Google Maps
        </span>
      </a>

      <div className="flex flex-col flex-grow" style={{ padding: '28px 28px 28px' }}>
        {store.tag && (
          <span
            className="font-mono"
            style={{
              fontSize: 9,
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: 'var(--amber-base)',
              marginBottom: 10,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span style={{ width: 16, height: 1, background: 'var(--amber-base)', display: 'inline-block' }} />
            {store.tag}
          </span>
        )}
        <h3 className="font-cormorant font-[500] text-amber-light" style={{ fontSize: 32, lineHeight: 1.05, marginBottom: 12 }}>
          {store.cityItalic ? <em className="italic">{store.city}</em> : store.city}
        </h3>

        <p className="font-dmsans font-light text-cream-base/55 flex-grow" style={{ fontSize: 13, lineHeight: 1.6, marginBottom: 24 }}>
          {store.address}
        </p>

        <div className="flex items-center gap-2 font-dmsans text-cream-base" style={{ padding: '14px 0', borderTop: '1px solid rgba(207,143,58,0.15)', borderBottom: '1px solid rgba(207,143,58,0.15)', fontSize: 13, letterSpacing: '0.04em', marginBottom: 16 }}>
          <span className="text-amber-light"><PhoneIcon /></span>
          {store.display}
        </div>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Falar com a loja de ${store.city} via WhatsApp`}
          className="store-cta inline-flex items-center justify-between w-full transition-all duration-200"
          style={{ padding: '14px 16px', background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.4)', color: '#6ee19c', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none' }}
        >
          Falar com a loja <ArrowIcon />
        </a>
      </div>
    </div>
  )
}

export default function StoresSection() {
  const ref = useReveal()

  return (
    <section id="lojas" className="relative bg-brown-deep text-cream-base overflow-hidden stores-section">
      <div className="absolute pointer-events-none" style={{ right: -200, top: '50%', transform: 'translateY(-50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(207,143,58,0.06), transparent 70%)' }} aria-hidden="true" />

      <div className="container-marion relative">
        <div ref={ref} className="reveal stores-head">
          <div>
            <div className="section-marker" style={{ marginBottom: 24 }}>
              <span className="dash" />
              <span className="num-italic">05 / 06</span>
              <span>Nossas lojas</span>
            </div>
            <h2 className="font-cormorant font-[500] text-cream-base section-title-size">
              Sempre <em className="text-amber-light italic">perto</em><br />de você.
            </h2>
          </div>
          <p className="font-dmsans font-light text-cream-base/55 stores-desc" style={{ fontSize: 15, lineHeight: 1.7, maxWidth: 340 }}>
            A fábrica em Iconha e três lojas espalhadas pelo Espírito Santo para atender você. Visite a unidade mais próxima ou fale por WhatsApp.
          </p>
        </div>

        <div className="stores-grid">
          {STORES.map((store, i) => (
            <StoreCard key={store.city} store={store} delay={i * 100} />
          ))}
        </div>
      </div>

      <style>{`
        .stores-section { padding: 140px 0; }
        .stores-head {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: end;
          margin-bottom: 64px;
          padding-bottom: 32px;
          border-bottom: 1px solid rgba(207,143,58,0.18);
        }
        .stores-desc { margin-left: auto; }
        .stores-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }

        .store-card:hover {
          background: rgba(255,255,255,0.05) !important;
          border-color: rgba(207,143,58,0.5) !important;
          transform: translateY(-3px);
        }

        /* Map header */
        .store-map-link { text-decoration: none; }
        .store-map-iframe {
          transition: filter 0.4s ease, transform 0.6s ease;
        }
        .store-map-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(180deg, rgba(20,10,4,0.10) 0%, rgba(20,10,4,0.55) 100%);
          transition: opacity 0.3s ease;
        }
        .store-map-hint {
          position: absolute;
          left: 50%;
          bottom: 14px;
          transform: translateX(-50%) translateY(6px);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 14px;
          background: rgba(20,10,4,0.85);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(207,143,58,0.32);
          color: var(--cream-base);
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          opacity: 0;
          transition: opacity 0.25s ease, transform 0.25s ease;
          pointer-events: none;
        }
        .store-map-link:hover .store-map-hint,
        .store-card:hover .store-map-hint {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }
        .store-card:hover .store-map-iframe {
          filter: grayscale(0.15) contrast(1);
          transform: scale(1.02);
        }
        .store-cta:hover {
          background: #25d366 !important;
          border-color: #25d366 !important;
          color: #0d3a1c !important;
        }

        @media (max-width: 1100px) {
          .stores-section { padding: 80px 0; }
          .stores-head { grid-template-columns: 1fr; gap: 20px; margin-bottom: 40px; }
          .stores-desc { margin-left: 0; max-width: 100%; }
          .stores-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .stores-section { padding: 64px 0; }
          .stores-grid { grid-template-columns: 1fr; }
          .store-card > div:last-child { padding: 24px 20px !important; }
        }
      `}</style>
    </section>
  )
}
