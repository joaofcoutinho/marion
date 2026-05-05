import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import { CATEGORIES, PRIMARY_PHONE } from '@/lib/data'
import { wppLink } from '@/lib/whatsapp'

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

const WppIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cat = CATEGORIES.find((c) => c.slug === params.slug)
  if (!cat) return { title: 'Categoria — Marion Madeiras' }
  return {
    title: `${cat.name} — Marion Madeiras`,
    description: cat.intro,
  }
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const cat = CATEGORIES.find((c) => c.slug === params.slug)
  if (!cat) notFound()

  const wppHref = wppLink(PRIMARY_PHONE, cat.wppMsg)
  const others = CATEGORIES.filter((c) => c.slug !== cat.slug)

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="cat-hero relative flex items-stretch overflow-hidden bg-brown-deep"
          style={{ minHeight: '70vh', paddingTop: 72 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${cat.image}')` }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background: `
                linear-gradient(180deg, rgba(20,10,4,0.45) 0%, rgba(20,10,4,0.65) 50%, rgba(20,10,4,0.95) 100%),
                linear-gradient(90deg, rgba(20,10,4,0.7) 0%, rgba(20,10,4,0.15) 60%, rgba(20,10,4,0.55) 100%)
              `,
            }}
          />

          <span className="cat-rule cat-rule-top" aria-hidden="true" />

          <div className="container-marion relative z-[2] flex flex-col justify-end" style={{ paddingTop: 80, paddingBottom: 90 }}>
            {/* Breadcrumb */}
            <nav
              className="font-mono text-amber-light"
              style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.85, marginBottom: 28 }}
              aria-label="Trilha de navegação"
            >
              <Link href="/" className="hover:text-cream-light transition-colors">Início</Link>
              <span style={{ margin: '0 10px', opacity: 0.55 }}>/</span>
              <Link href="/categorias" className="hover:text-cream-light transition-colors">Produtos</Link>
              <span style={{ margin: '0 10px', opacity: 0.55 }}>/</span>
              <span style={{ color: 'var(--cream-base)' }}>{cat.name}</span>
            </nav>

            <h1 className="font-cormorant font-[500] text-cream-base hero-title-size" style={{ marginBottom: 24 }}>
              {cat.name}{' '}
              {cat.italic && (
                <em className="text-amber-light not-italic italic font-[400]">{cat.italic}</em>
              )}
              <span className="italic text-amber-base" style={{ fontWeight: 400, fontSize: '0.85em', verticalAlign: '0.05em' }}>.</span>
            </h1>

            <p
              className="font-dmsans font-light text-cream-base/75"
              style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 620, marginBottom: 32 }}
            >
              {cat.tagline}
            </p>

            <div className="hero-actions" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
              <a className="btn-primary" href={wppHref} target="_blank" rel="noopener noreferrer">
                <WppIcon />
                Pedir Orçamento
              </a>
              <Link className="btn-ghost" href="/categorias">
                Ver outras categorias
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        {/* Intro + Items */}
        <section
          className="cat-content relative text-cream-base"
          style={{
            backgroundImage: 'url(/fundohero.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(20,10,4,0.93)' }} aria-hidden="true" />
          <span className="cat-rule cat-rule-top" aria-hidden="true" />
          <span className="cat-rule cat-rule-bottom" aria-hidden="true" />

          <div className="container-marion relative z-[1]" style={{ paddingTop: 110, paddingBottom: 110 }}>
            <div className="cat-intro-grid">
              <div>
                <div
                  className="font-mono text-amber-light"
                  style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 18, display: 'inline-flex', alignItems: 'center', gap: 14 }}
                >
                  <span style={{ width: 28, height: 1, background: 'var(--amber-base)' }} />
                  Sobre a categoria
                </div>
                <h2 className="font-cormorant font-[500] text-cream-base section-title-size" style={{ marginBottom: 24, lineHeight: 1.05 }}>
                  Madeira para <em className="italic text-amber-light">{cat.name.toLowerCase()}</em>.
                </h2>
              </div>
              <p className="font-dmsans font-light text-cream-base/70" style={{ fontSize: 15.5, lineHeight: 1.75 }}>
                {cat.intro}
              </p>
            </div>

            {/* Items grid */}
            <div className="cat-items">
              {cat.items.map((item, i) => (
                <article key={item.name} className="cat-item">
                  <div
                    className="font-mono text-amber-light"
                    style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.7, marginBottom: 14 }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-cormorant font-[500] text-cream-light" style={{ fontSize: 26, lineHeight: 1.15, marginBottom: 10 }}>
                    {item.name}
                  </h3>
                  <p className="font-dmsans font-light text-cream-base/60" style={{ fontSize: 14, lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>

            {/* Inline CTA */}
            <div className="cat-cta-inline">
              <div>
                <div
                  className="font-mono text-amber-light"
                  style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 12, opacity: 0.85 }}
                >
                  Solicite seu orçamento
                </div>
                <h3 className="font-cormorant font-[500] text-cream-base" style={{ fontSize: 30, lineHeight: 1.15, maxWidth: 520 }}>
                  Pronto para sua obra. Atendimento <em className="italic text-amber-light">rápido</em> e direto.
                </h3>
              </div>
              <a className="btn-primary" href={wppHref} target="_blank" rel="noopener noreferrer">
                <WppIcon />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Other categories */}
        <section
          className="cat-others relative text-cream-base"
          style={{ background: 'var(--brown-deep)' }}
        >
          <div className="container-marion" style={{ paddingTop: 90, paddingBottom: 100 }}>
            <div
              className="font-mono text-amber-light"
              style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 14, display: 'inline-flex', alignItems: 'center', gap: 14 }}
            >
              <span style={{ width: 28, height: 1, background: 'var(--amber-base)' }} />
              Outras categorias
            </div>
            <h2 className="font-cormorant font-[500] text-cream-base" style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.1, marginBottom: 36 }}>
              Explore mais <em className="italic text-amber-light">linhas</em>.
            </h2>

            <div className="cat-others-grid">
              {others.map((o) => (
                <Link key={o.slug} href={`/categorias/${o.slug}`} className="cat-other-card">
                  <div
                    className="cat-other-img"
                    style={{ backgroundImage: `url('${o.image}')` }}
                    aria-hidden="true"
                  />
                  <div className="cat-other-overlay" aria-hidden="true" />
                  <div className="cat-other-body">
                    <div className="font-cormorant font-[500] text-cream-base" style={{ fontSize: 24, lineHeight: 1.15 }}>
                      {o.name}.
                    </div>
                    <span className="cat-other-arrow font-dmsans font-semibold text-amber-light" style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', marginTop: 12, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                      Ver categoria <ArrowIcon />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />

      <style>{`
        .cat-rule {
          position: absolute;
          left: 0; right: 0;
          height: 1px;
          z-index: 2;
          pointer-events: none;
          background: linear-gradient(90deg, transparent 0%, rgba(207,143,58,0.45) 50%, transparent 100%);
        }
        .cat-rule-top    { top: 0; }
        .cat-rule-bottom { bottom: 0; }

        .cat-intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: end;
          padding-bottom: 56px;
          border-bottom: 1px solid rgba(207,143,58,0.18);
          margin-bottom: 64px;
        }

        .cat-items {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(207,143,58,0.18);
          border: 1px solid rgba(207,143,58,0.18);
        }
        .cat-item {
          background: rgba(20,10,4,0.55);
          padding: 32px 28px;
          transition: background 0.3s ease;
        }
        .cat-item:hover {
          background: rgba(20,10,4,0.75);
        }

        .cat-cta-inline {
          margin-top: 72px;
          padding: 40px 44px;
          border: 1px solid rgba(207,143,58,0.22);
          background: rgba(26,12,4,0.55);
          backdrop-filter: blur(6px);
          display: flex;
          gap: 32px;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }

        .cat-others-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .cat-other-card {
          position: relative;
          aspect-ratio: 4/5;
          overflow: hidden;
          background: var(--brown-deep);
          display: block;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .cat-other-card:hover {
          transform: translateY(-3px);
          box-shadow:
            0 0 0 1px rgba(207,143,58,0.35),
            0 0 24px rgba(207,143,58,0.18),
            0 12px 40px rgba(207,143,58,0.10);
        }
        .cat-other-img {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.6s ease;
        }
        .cat-other-card:hover .cat-other-img { transform: scale(1.05); }
        .cat-other-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(20,10,4,0) 30%, rgba(20,10,4,0.92) 100%);
        }
        .cat-other-body {
          position: absolute;
          inset: auto 0 0 0;
          padding: 22px;
        }
        .cat-other-card:hover .cat-other-arrow { gap: 14px; color: var(--cream-light); }

        @media (max-width: 1100px) {
          .cat-intro-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .cat-items { grid-template-columns: repeat(2, 1fr); }
          .cat-others-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .cat-items { grid-template-columns: 1fr; }
          .cat-cta-inline {
            padding: 28px 24px;
            gap: 20px;
          }
          .cat-others-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
