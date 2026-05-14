import { FEATURES } from '@/lib/data'

const ICONS: Record<string, JSX.Element> = {
  factory: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21V11l5 2.5V8l5 2.5V7l8 5v9H3z" />
      <path d="M3 21h18" />
      <path d="M7 17v1M11 17v1M15 17v1M19 17v1" />
    </svg>
  ),
  chat: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 5h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H11l-5 4v-4H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
      <path d="M7 10h10" />
      <path d="M7 13h6" />
    </svg>
  ),
  seal: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l2.1 1.6 2.6-.4.8 2.5 2.4 1-.6 2.6L21 11l-1.7 2.1.6 2.6-2.4 1-.8 2.5-2.6-.4L12 20l-2.1-1.6-2.6.4-.8-2.5-2.4-1 .6-2.6L3 11l1.7-2.1-.6-2.6 2.4-1 .8-2.5 2.6.4L12 2z" />
      <path d="M8.5 12l2.5 2.5L15.5 10" />
    </svg>
  ),
  pin: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
}

export default function FeaturesSection() {
  return (
    <section
      id="diferenciais"
      className="relative overflow-hidden features-section"
      style={{ background: 'var(--brown-dark)', color: 'var(--brown-deep)' }}
    >
      <div className="container-marion relative">
        {/* Header */}
        <div className="features-head">
          <div>
            <div className="section-marker features-marker">
              <span className="dash" />
              <span>Por que nos escolher</span>
            </div>
            <h2 className="font-cormorant font-[500] section-title-size" style={{ color: 'var(--brown-deep)' }}>
              O que nos<br /><em className="italic" style={{ color: 'var(--amber-base)' }}>diferencia</em>.
            </h2>
          </div>
          <p className="font-dmsans font-light features-desc" style={{ fontSize: 15, lineHeight: 1.7, maxWidth: 340, color: 'rgba(26,12,4,0.65)' }}>
            Décadas de experiência transformadas em diferenciais reais para o seu projeto — da floresta até a sua obra.
          </p>
        </div>

        {/* Grid */}
        <div className="features-list" style={{ borderTop: '1px solid rgba(125,63,23,0.22)' }}>
          {FEATURES.map((feat, i) => (
            <div
              key={feat.title}
              className="feature-item group"
              data-last={i === FEATURES.length - 1 ? 'true' : 'false'}
            >
              <div className="feature-icon-wrap" aria-hidden="true">
                {ICONS[feat.icon]}
              </div>

              <h3 className="font-cormorant font-semibold feature-title">
                {feat.title}
              </h3>
              <p className="font-dmsans font-light feature-text">
                {feat.desc}
              </p>
              <span className="feature-bar" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .features-section { padding: 130px 0; }
        .features-section .section-marker { color: var(--amber-base); }
        .features-section .section-marker .dash { background: var(--amber-base); opacity: 0.7; }

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
          gap: 20px;
          border-top: none !important;
        }
        .feature-item {
          position: relative;
          padding: 32px 28px 36px;
          background:
            radial-gradient(ellipse at top left, rgba(207,143,58,0.10), transparent 60%),
            var(--brown-deep);
          border: 1px solid rgba(207,143,58,0.15);
          border-radius: 2px;
          box-shadow:
            inset 0 0 40px rgba(207,143,58,0.04),
            0 0 24px -8px rgba(207,143,58,0.10);
          transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
        }
        .feature-item:hover {
          transform: translateY(-3px);
          border-color: rgba(207,143,58,0.40);
          box-shadow:
            inset 0 0 50px rgba(207,143,58,0.06),
            0 0 0 1px rgba(207,143,58,0.20),
            0 18px 40px -10px rgba(207,143,58,0.18);
        }

        .feature-icon-wrap {
          width: 48px;
          height: 48px;
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--amber-base);
          background: rgba(207,143,58,0.08);
          border: 1px solid rgba(207,143,58,0.20);
          border-radius: 2px;
          transition: background 0.35s ease, border-color 0.35s ease;
        }
        .feature-item:hover .feature-icon-wrap {
          background: rgba(207,143,58,0.14);
          border-color: rgba(207,143,58,0.40);
        }

        .feature-title {
          font-size: 24px;
          line-height: 1.15;
          margin-bottom: 12px;
          color: var(--cream-base);
        }
        .feature-text {
          font-size: 14px;
          line-height: 1.65;
          color: rgba(244,234,214,0.65);
        }

        @media (max-width: 1100px) {
          .features-section { padding: 80px 0; }
          .features-head { grid-template-columns: 1fr; gap: 20px; margin-bottom: 48px; }
          .features-desc { margin-left: 0; max-width: 100%; }
          .features-list { grid-template-columns: repeat(2, 1fr); gap: 16px; }
        }

        @media (max-width: 640px) {
          .features-section { padding: 64px 0; }
          .features-list { grid-template-columns: 1fr; gap: 14px; }
          .feature-item { padding: 28px 22px 30px 24px; }
          .feature-title { font-size: 20px; }
        }
      `}</style>
    </section>
  )
}
