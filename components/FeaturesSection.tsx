import { FEATURES } from '@/lib/data'

const ICONS: Record<string, JSX.Element> = {
  factory: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 54V30l12 6V24l12 6V20l24 14v20H8z" />
      <path d="M8 54h48" />
      <path d="M18 46v4M28 46v4M38 46v4M48 46v4" />
      <path d="M44 20V10h6v10" />
      <path d="M47 14v-1" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 14h32a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4H28l-10 8V40h-6a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4z" />
      <path d="M20 24h18" />
      <path d="M20 30h12" />
    </svg>
  ),
  seal: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M32 6l5.6 4.2 6.9-1 2 6.7 6.5 2.6-1.7 6.8 4.4 5.5-4.4 5.5 1.7 6.8-6.5 2.6-2 6.7-6.9-1L32 54l-5.6-4.2-6.9 1-2-6.7-6.5-2.6 1.7-6.8L8.3 29.2l4.4-5.5-1.7-6.8 6.5-2.6 2-6.7 6.9 1L32 6z" />
      <path d="M24 30l5.5 5.5L42 23" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M32 56s-16-14-16-26a16 16 0 0 1 32 0c0 12-16 26-16 26z" />
      <circle cx="32" cy="28" r="6" />
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
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, rgba(125,63,23,0.05) 0, rgba(125,63,23,0.05) 1px, transparent 1px, transparent 80px),
            repeating-linear-gradient(90deg, rgba(125,63,23,0.05) 0, rgba(125,63,23,0.05) 1px, transparent 1px, transparent 80px)
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
              <div className="feature-icon-wrap">
                <span className="feature-icon-corner feature-icon-corner-tl" aria-hidden="true" />
                <span className="feature-icon-corner feature-icon-corner-br" aria-hidden="true" />
                <span className="feature-icon" aria-hidden="true">{ICONS[feat.icon]}</span>
                <span className="feature-icon-num font-cormorant italic" aria-hidden="true">{feat.num}</span>
              </div>

              <h3 className="font-cormorant font-semibold feature-title" style={{ color: 'var(--brown-deep)' }}>
                {feat.title}
              </h3>
              <p className="font-dmsans font-light feature-text" style={{ color: 'rgba(26,12,4,0.65)' }}>
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
        .features-section .section-marker .num-italic { color: var(--wood-warm); }

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
        .feature-item { border-right-color: rgba(125,63,23,0.16); }
        .feature-item:hover { background: linear-gradient(180deg, rgba(207,143,58,0.12), transparent); }

        .feature-icon-wrap {
          position: relative;
          width: 76px;
          height: 76px;
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--amber-base);
          transition: transform 0.4s ease, color 0.3s ease;
        }
        .feature-item:hover .feature-icon-wrap {
          transform: translateY(-2px);
          color: var(--wood-warm);
        }
        .feature-icon { display: block; width: 44px; height: 44px; }
        .feature-icon svg { width: 100%; height: 100%; display: block; }
        .feature-icon-corner {
          position: absolute;
          width: 14px;
          height: 14px;
          pointer-events: none;
          opacity: 0.6;
        }
        .feature-icon-corner-tl {
          top: 0; left: 0;
          border-top: 1px solid rgba(125,63,23,0.55);
          border-left: 1px solid rgba(125,63,23,0.55);
        }
        .feature-icon-corner-br {
          bottom: 0; right: 0;
          border-bottom: 1px solid rgba(125,63,23,0.55);
          border-right: 1px solid rgba(125,63,23,0.55);
        }
        .feature-icon-num {
          position: absolute;
          top: -4px;
          right: -14px;
          font-size: 14px;
          letter-spacing: 0.04em;
          color: rgba(125,63,23,0.55);
          font-weight: 500;
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
            border-bottom: 1px solid rgba(125,63,23,0.16);
          }
          .feature-item:nth-child(odd)  { border-right: 1px solid rgba(125,63,23,0.16); }
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
            border-bottom: 1px solid rgba(125,63,23,0.16);
          }
          .feature-item[data-last='true'] { border-bottom: none; }
          .feature-title { font-size: 20px; }
        }
      `}</style>
    </section>
  )
}
