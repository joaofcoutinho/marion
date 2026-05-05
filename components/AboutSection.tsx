'use client'

import { useReveal } from '@/hooks/useReveal'

const STATS = [
  { num: '30', sup: '+', label: 'Anos de tradição' },
  { num: '04', sup: '',  label: 'Lojas no ES' },
  { num: '5k', sup: '+', label: 'Clientes atendidos' },
]

export default function AboutSection() {
  const refLeft  = useReveal()
  const refRight = useReveal()

  return (
    <section
      id="sobre"
      className="relative text-cream-base overflow-hidden about-section"
      style={{ background: 'var(--brown-dark)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(207,143,58,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div className="container-marion relative about-inner">
        {/* Left: text */}
        <div ref={refLeft} className="reveal">
          <div className="section-marker about-marker">
            <span className="font-cormorant italic text-amber-base" style={{ fontSize: 14, opacity: 0.7 }}>02 / 06</span>
            <span className="dash" />
            <span>Nossa história</span>
          </div>

          <h2 className="font-cormorant font-[500] text-cream-base about-title-size about-heading">
            Tradição familiar em <em className="text-amber-light italic font-[500]">madeira de qualidade</em>.
          </h2>

          <p
            className="font-cormorant italic text-cream-base/85 about-lead"
          >
            "Cada peça que sai da Marion carrega trinta anos de mão na madeira —
            e o compromisso de chegar até você do mesmo jeito que sai daqui."
          </p>

          <div className="about-body">
            <p className="font-dmsans font-light text-cream-base/65" style={{ fontSize: 15, lineHeight: 1.75 }}>
              A Marion Madeiras nasceu em Iconha, no coração do Espírito Santo, com
              o propósito de levar madeiras de alta qualidade diretamente da fábrica
              para as mãos de quem constrói, decora e transforma ambientes.
            </p>
            <p className="font-dmsans font-light text-cream-base/65" style={{ fontSize: 15, lineHeight: 1.75, marginTop: 18 }}>
              Hoje, com lojas em Guarapari, Cachoeiro de Itapemirim e Anchieta,
              mantemos o compromisso de origem: madeiras certificadas, atendimento
              personalizado e os melhores preços do mercado.
            </p>
          </div>

          <div className="about-stats">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-cormorant font-[500] text-amber-light about-stat-num">
                  {s.num}
                  {s.sup && <em className="italic text-amber-base" style={{ fontSize: '0.6em' }}>{s.sup}</em>}
                </div>
                <div className="font-mono text-cream-base/50" style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', marginTop: 8 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: image */}
        <div ref={refRight} className="reveal about-image-col">
          <div
            className="absolute pointer-events-none about-frame"
            aria-hidden="true"
          />
          <div className="about-image-main relative overflow-hidden" style={{ background: 'var(--brown-mid)', boxShadow: '0 40px 80px -30px rgba(26,12,4,0.45)', zIndex: 1 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Marion.png" alt="Marion Madeiras" className="w-full h-full object-cover block" loading="lazy" />
            <div
              className="absolute flex justify-between items-center"
              style={{ bottom: 24, left: 24, right: 24, background: 'rgba(20,10,4,0.85)', backdropFilter: 'blur(8px)', padding: '18px 22px', borderLeft: '2px solid var(--amber-base)' }}
            >
              <div>
                <div className="font-mono text-amber-light" style={{ fontSize: 9, letterSpacing: '0.28em', textTransform: 'uppercase', opacity: 0.7, marginBottom: 4 }}>Iconha · ES</div>
                <div className="font-cormorant italic text-cream-base" style={{ fontSize: 18 }}>Onde tudo começa</div>
              </div>
              <div className="font-cormorant italic text-amber-light" style={{ fontSize: 28 }}>19°—S</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section { padding: 140px 0 120px; }
        .about-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: start;
        }
        .about-marker { margin-bottom: 24px; }
        .about-heading { margin-bottom: 32px; }
        .about-lead {
          font-size: 22px;
          line-height: 1.45;
          margin-bottom: 28px;
          padding-left: 20px;
          border-left: 2px solid var(--amber-base);
        }
        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 40px;
          padding-top: 32px;
          border-top: 1px solid rgba(207,143,58,0.18);
        }
        .about-stat-num { font-size: 56px; line-height: 1; letter-spacing: -0.02em; }
        .about-image-col { position: relative; padding-top: 40px; }
        .about-frame {
          top: 0; left: 32px;
          bottom: 32px; right: -32px;
          border: 1px solid rgba(207,143,58,0.35);
          z-index: 0;
        }
        .about-image-main { aspect-ratio: 4/5; }

        @media (max-width: 1100px) {
          .about-section { padding: 100px 0 80px; }
          .about-inner { grid-template-columns: 1fr; gap: 60px; }
          .about-image-col { padding-top: 20px; }
          .about-frame { display: none; }
          .about-image-main { aspect-ratio: 16/9; }
        }

        @media (max-width: 640px) {
          .about-section { padding: 72px 0 64px; }
          .about-lead { font-size: 18px; }
          .about-stat-num { font-size: 40px; }
          .about-stats { gap: 12px; }
          .about-image-main { aspect-ratio: 4/3; }
        }
      `}</style>
    </section>
  )
}
