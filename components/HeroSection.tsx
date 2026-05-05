'use client'

import { PRIMARY_PHONE } from '@/lib/data'
import { wppLink } from '@/lib/whatsapp'

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

const WppIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function HeroSection() {
  const wppHref = wppLink(PRIMARY_PHONE, 'Olá! Vim pelo site e gostaria de solicitar um orçamento.')

  return (
    <section
      className="hero-section relative flex items-stretch bg-brown-deep overflow-hidden"
      style={{ minHeight: '100vh', paddingTop: 72 }}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video-hero.mp4"
        autoPlay loop muted playsInline
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `
            linear-gradient(180deg, rgba(20,10,4,0.4) 0%, rgba(20,10,4,0.6) 50%, rgba(20,10,4,0.95) 100%),
            linear-gradient(90deg, rgba(20,10,4,0.7) 0%, rgba(20,10,4,0.1) 60%, rgba(20,10,4,0.5) 100%)
          `,
        }}
      />

      <div className="hero-grid relative z-[2] container-marion w-full">
        {/* Left: main content */}
        <div className="hero-content">
          <div className="animate-fadeup-1 inline-flex items-center gap-[14px] font-mono text-amber-light hero-eyebrow">
            <span className="hero-eyebrow-line" />
            Da Floresta · Para Sua Obra
          </div>

          <h1 className="animate-fadeup-2 font-cormorant font-[500] text-cream-base hero-title-size hero-h1">
            A natureza<br />
            em cada <em className="text-amber-light not-italic italic font-[400]">peça</em>
            <span className="italic text-amber-base" style={{ fontWeight: 400, fontSize: '0.85em', verticalAlign: '0.05em' }}>,</span><br />
            o ofício em cada <em className="text-amber-light not-italic italic font-[400]">tábua</em>.
          </h1>

          <p className="animate-fadeup-3 font-dmsans font-light text-cream-base/70 hero-sub">
            Madeiras selecionadas direto da fábrica para construção, mobiliário e
            acabamento. Três décadas de tradição familiar no coração do Espírito Santo.
          </p>

          <div className="animate-fadeup-4 hero-actions">
            <a className="btn-primary" href={wppHref} target="_blank" rel="noopener noreferrer">
              <WppIcon />
              Pedir Orçamento
            </a>
            <a className="btn-ghost" href="#produtos">
              Ver Produtos
              <ArrowIcon />
            </a>
          </div>
        </div>

        {/* Right: featured card */}
        <aside
          className="hero-card relative text-cream-base"
          style={{
            background: 'rgba(26,12,4,0.65)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(207,143,58,0.25)',
            padding: 28,
            borderRadius: 2,
            alignSelf: 'end',
          }}
          aria-label="Em destaque: deck de madeira"
        >
          <span
            className="absolute"
            style={{ top: -1, left: 24, right: 24, height: 2, background: 'var(--amber-base)' }}
          />

          <div
            className="font-mono flex justify-between"
            style={{ fontSize: 9, letterSpacing: '0.3em', color: 'var(--amber-light)', opacity: 0.7, textTransform: 'uppercase', marginBottom: 16 }}
          >
            <span>Em destaque</span>
            <span>Nº 01</span>
          </div>

          <div className="font-cormorant" style={{ fontSize: 26, lineHeight: 1.2, color: 'var(--cream-base)', marginBottom: 6 }}>
            Deck nobre de <em className="text-amber-light italic">Cumaru</em>
          </div>

          <div className="font-dmsans" style={{ fontSize: 12, color: 'rgba(244,234,214,0.55)', marginBottom: 18, letterSpacing: '0.04em' }}>
            Áreas externas · Tratamento UV · Garantia 1 ano
          </div>

          {[
            { label: 'Densidade',  value: '1.05 g/cm³' },
            { label: 'Origem',     value: 'Selecionada' },
            { label: 'Acabamento', value: 'Premium' },
          ].map(({ label, value }) => (
            <div key={label} className="flex justify-between" style={{ padding: '14px 0', borderTop: '1px solid rgba(207,143,58,0.18)', fontSize: 12 }}>
              <span className="font-dmsans" style={{ color: 'rgba(244,234,214,0.5)', letterSpacing: '0.06em', textTransform: 'uppercase', fontSize: 10 }}>{label}</span>
              <span className="font-cormorant italic" style={{ color: 'var(--amber-light)', fontSize: 14 }}>{value}</span>
            </div>
          ))}

          <a
            href="#produtos"
            className="flex items-center justify-between font-mono hover:text-cream-light transition-colors duration-200"
            style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid rgba(207,143,58,0.18)', color: 'var(--amber-light)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 600 }}
          >
            <span>Conhecer linha</span>
            <ArrowIcon />
          </a>
        </aside>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 60px;
          align-items: end;
          padding-bottom: 80px;
          padding-top: 60px;
        }
        .hero-content { max-width: 720px; }
        .hero-eyebrow {
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          margin-bottom: 28px;
          display: inline-flex;
        }
        .hero-eyebrow-line {
          width: 28px; height: 1px;
          background: var(--amber-base);
          display: inline-block;
          flex-shrink: 0;
        }
        .hero-h1 { margin-bottom: 36px; }
        .hero-sub {
          max-width: 480px;
          font-size: 16px;
          line-height: 1.7;
          margin-bottom: 40px;
        }
        .hero-actions {
          display: flex;
          gap: 14px;
          align-items: center;
          flex-wrap: wrap;
        }

        @media (max-width: 1100px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            padding-top: 48px;
            padding-bottom: 60px;
          }
          .hero-card { max-width: 460px; }
        }

        @media (max-width: 640px) {
          .hero-section { min-height: 100svh; }
          .hero-grid {
            padding-top: 36px;
            padding-bottom: 48px;
            gap: 32px;
          }
          .hero-eyebrow { font-size: 9px; margin-bottom: 20px; }
          .hero-h1 { margin-bottom: 24px; }
          .hero-sub { font-size: 14px; margin-bottom: 28px; max-width: 100%; }
          .hero-card { display: none; }
          .btn-primary, .btn-ghost { padding: 15px 20px; font-size: 10px; }
        }
      `}</style>
    </section>
  )
}
