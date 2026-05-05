import { FEATURES } from '@/lib/data'

export default function FeaturesSection() {
  return (
    <section
      id="diferenciais"
      className="relative text-cream-base overflow-hidden features-section"
      style={{ background: 'var(--brown-dark)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, rgba(207,143,58,0.04) 0, rgba(207,143,58,0.04) 1px, transparent 1px, transparent 80px),
            repeating-linear-gradient(90deg, rgba(207,143,58,0.04) 0, rgba(207,143,58,0.04) 1px, transparent 1px, transparent 80px)
          `,
        }}
        aria-hidden="true"
      />

      <div className="container-marion relative">
        {/* Header */}
        <div className="features-head">
          <div>
            <div className="section-marker features-marker">
              <span className="dash" />
              <span className="num-italic">04 / 06</span>
              <span>Por que nos escolher</span>
            </div>
            <h2 className="font-cormorant font-[500] text-cream-base section-title-size">
              O que nos<br /><em className="text-amber-light italic">diferencia</em>.
            </h2>
          </div>
          <p className="font-dmsans font-light text-cream-base/60 features-desc" style={{ fontSize: 15, lineHeight: 1.7, maxWidth: 340 }}>
            Décadas de experiência transformadas em diferenciais reais para o seu projeto — da floresta até a sua obra.
          </p>
        </div>

        {/* Grid */}
        <div className="features-list" style={{ borderTop: '1px solid rgba(207,143,58,0.18)' }}>
          {FEATURES.map((feat, i) => (
            <div
              key={feat.title}
              className="feature-item group"
              data-last={i === FEATURES.length - 1 ? 'true' : 'false'}
            >
              <div className="feature-img-wrap relative overflow-hidden" style={{ background: 'var(--brown-deep)', border: '1px solid rgba(207,143,58,0.15)' }}>
                <div
                  className="feature-img-bg absolute inset-0 bg-cover bg-center transition-transform duration-700"
                  style={{ backgroundImage: `url('${feat.image}')`, filter: 'saturate(1.05)' }}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(20,10,4,0.1) 40%, rgba(20,10,4,0.7) 100%)' }} />
                <span
                  className="absolute font-cormorant italic text-amber-light z-[2]"
                  style={{ bottom: 14, left: 14, fontSize: 38, fontWeight: 400, lineHeight: 1, textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}
                >
                  {feat.num}
                </span>
              </div>

              <h3 className="font-cormorant font-semibold text-cream-base feature-title">
                {feat.title}
              </h3>
              <p className="font-dmsans font-light text-cream-base/60 feature-text">
                {feat.desc}
              </p>
              <span className="feature-bar" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .features-section { padding: 130px 0; }

        .features-head {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: end;
          gap: 60px;
          margin-bottom: 80px;
        }
        .features-marker { margin-bottom: 24px; }
        .features-desc { margin-left: auto; }

        .features-list {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .feature-item {
          padding: 0 28px 36px 0;
          border-right: 1px solid rgba(207,143,58,0.12);
          position: relative;
          transition: background 0.3s;
        }
        .feature-item[data-last='true'] { border-right: none; padding-right: 0; }
        .feature-item:hover { background: linear-gradient(180deg, rgba(207,143,58,0.08), transparent); }

        .feature-img-wrap {
          width: 100%;
          aspect-ratio: 4/3;
          margin-bottom: 28px;
        }
        .feature-title { font-size: 24px; line-height: 1.15; margin-bottom: 12px; }
        .feature-text  { font-size: 14px; line-height: 1.65; }

        @media (max-width: 1100px) {
          .features-section { padding: 80px 0; }
          .features-head { grid-template-columns: 1fr; gap: 20px; margin-bottom: 48px; }
          .features-desc { margin-left: 0; max-width: 100%; }
          .features-list { grid-template-columns: repeat(2, 1fr); gap: 0; }
          .feature-item {
            padding: 0 20px 32px 0;
            border-right: none;
            border-bottom: 1px solid rgba(207,143,58,0.12);
          }
          .feature-item:nth-child(odd)  { border-right: 1px solid rgba(207,143,58,0.12); }
          .feature-item:nth-last-child(-n+2) { border-bottom: none; }
          .feature-item[data-last='true'] { padding-right: 0; }
          .feature-bar { display: none; }
        }

        @media (max-width: 640px) {
          .features-section { padding: 64px 0; }
          .features-list { grid-template-columns: 1fr; }
          .feature-item {
            padding: 0 0 28px 0;
            border-right: none !important;
            border-bottom: 1px solid rgba(207,143,58,0.12);
          }
          .feature-item[data-last='true'] { border-bottom: none; }
          .feature-title { font-size: 20px; }
        }
      `}</style>
    </section>
  )
}
