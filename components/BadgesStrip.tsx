import { BADGES } from '@/lib/data'

const ICONS: Record<string, React.ReactNode> = {
  shield: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  ),
  discount: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5"/>
      <path d="M2 12l10 5 10-5"/>
    </svg>
  ),
  card: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="2"/>
      <line x1="2" y1="10" x2="22" y2="10"/>
    </svg>
  ),
  truck: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="1" y="3" width="15" height="13" rx="1"/>
      <path d="M16 8h4l3 4v5h-7V8z"/>
      <circle cx="5.5" cy="18.5" r="2.5"/>
      <circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  ),
}

export default function BadgesStrip() {
  return (
    <section
      className="relative bg-brown-deep text-cream-base overflow-hidden"
      style={{
        padding: '56px 0',
        borderTop: '1px solid rgba(207,143,58,0.15)',
        borderBottom: '1px solid rgba(207,143,58,0.15)',
      }}
    >
      <div className="container-marion">
        <div className="badges-grid">
          {BADGES.map((badge, i) => (
            <div key={badge.num} className="badge-item" data-index={i}>
              <div
                className="flex items-center justify-center text-amber-base flex-shrink-0"
                style={{
                  width: 48, height: 48,
                  background: 'rgba(207,143,58,0.08)',
                  border: '1px solid rgba(207,143,58,0.2)',
                  borderRadius: 2,
                }}
              >
                {ICONS[badge.icon]}
              </div>
              <div>
                <strong
                  className="block font-dmsans text-cream-base"
                  style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.02em', marginBottom: 4 }}
                >
                  {badge.title}
                </strong>
                <span className="font-dmsans text-cream-base/50" style={{ fontSize: 11, letterSpacing: '0.04em' }}>
                  {badge.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .badges-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .badge-item {
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 0 32px;
          border-right: 1px solid rgba(207,143,58,0.12);
        }
        .badge-item:first-child { padding-left: 0; }
        .badge-item:last-child  { border-right: none; padding-right: 0; }

        @media (max-width: 1100px) {
          .badges-grid { grid-template-columns: repeat(2, 1fr); gap: 0; }
          .badge-item {
            padding: 20px 16px;
            border-right: none;
            border-bottom: 1px solid rgba(207,143,58,0.12);
          }
          .badge-item:nth-child(odd)  { border-right: 1px solid rgba(207,143,58,0.12); }
          .badge-item:nth-last-child(-n+2) { border-bottom: none; }
        }

        @media (max-width: 640px) {
          .badges-grid { grid-template-columns: 1fr; }
          .badge-item { padding: 18px 0; border-right: none !important; }
          .badge-item:last-child { border-bottom: none; }
        }
      `}</style>
    </section>
  )
}
