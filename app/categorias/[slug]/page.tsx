import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import { CATEGORIES, PRIMARY_PHONE, type Product } from '@/lib/data'
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

const PdfIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="9" y1="13" x2="15" y2="13" />
    <line x1="9" y1="17" x2="15" y2="17" />
  </svg>
)

function ProductCard({ product, index }: { product: Product; index: number }) {
  const wppHref = wppLink(PRIMARY_PHONE, product.wppMsg)
  const num = String(index + 1).padStart(2, '0')

  return (
    <a
      href={wppHref}
      target="_blank"
      rel="noopener noreferrer"
      className="cat-product-card"
      aria-label={`Pedir orçamento de ${product.name} via WhatsApp`}
    >
      <div className="cat-product-media" aria-hidden="true">
        {product.image ? (
          <>
            <div
              className="cat-product-img"
              style={{ backgroundImage: `url('${product.image}')` }}
            />
            <span className="cat-product-shade" />
          </>
        ) : (
          <>
            <div className="cat-product-placeholder">
              <span className="cat-product-monogram font-cormorant italic">M</span>
              <span className="cat-product-num font-mono">{num}</span>
            </div>
            <span className="cat-product-corner cat-product-corner-tl" />
            <span className="cat-product-corner cat-product-corner-br" />
          </>
        )}
      </div>

      <div className="cat-product-body">
        <h3 className="font-cormorant font-[500] text-cream-light cat-product-name">
          {product.name}
        </h3>
        {product.desc && (
          <p className="font-dmsans font-light text-cream-base/65 cat-product-desc">
            {product.desc}
          </p>
        )}
        <span className="cat-product-cta font-dmsans font-semibold">
          <WppIcon />
          Pedir orçamento
        </span>
      </div>
    </a>
  )
}

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
            {/* Products grid */}
            {cat.products && cat.products.length > 0 && (
              <div className="cat-products-block">
                <div className="cat-products-head">
                  <div
                    className="font-mono text-amber-light"
                    style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 14, display: 'inline-flex', alignItems: 'center', gap: 14 }}
                  >
                    <span style={{ width: 28, height: 1, background: 'var(--amber-base)' }} />
                    Produtos disponíveis
                  </div>
                  <h2 className="font-cormorant font-[500] text-cream-base" style={{ fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.1, marginBottom: 12 }}>
                    Linha em <em className="italic text-amber-light">destaque</em>.
                  </h2>
                  <p className="font-dmsans font-light text-cream-base/60" style={{ fontSize: 14.5, lineHeight: 1.7, maxWidth: 480 }}>
                    Confira os produtos disponíveis nesta categoria. Clique em qualquer um para falar diretamente com a Marion via WhatsApp.
                  </p>
                </div>

                <div className="cat-products-grid">
                  {cat.products.map((p, i) => (
                    <ProductCard key={p.slug} product={p} index={i} />
                  ))}
                </div>
              </div>
            )}

            {/* Inline CTA */}
            <div className="cat-cta-inline">
              <div>
                <div
                  className="font-mono text-amber-light"
                  style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 12, opacity: 0.85 }}
                >
                  Catálogo completo
                </div>
                <h3 className="font-cormorant font-[500] text-cream-base" style={{ fontSize: 30, lineHeight: 1.15, maxWidth: 520 }}>
                  Veja toda a linha Marion no <em className="italic text-amber-light">catálogo</em> em PDF.
                </h3>
              </div>
              <a className="btn-primary" href={cat.pdf ?? '/catalogo-marion.pdf'} target="_blank" rel="noopener noreferrer">
                <PdfIcon />
                Ver catálogo
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

        /* Products block */
        .cat-products-block {
          margin-top: 0;
        }
        .cat-products-head { margin-bottom: 36px; max-width: 760px; }

        .cat-products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .cat-product-card {
          position: relative;
          display: flex;
          flex-direction: column;
          background: rgba(20,10,4,0.55);
          border: 1px solid rgba(207,143,58,0.18);
          text-decoration: none;
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.3s ease;
        }
        .cat-product-card:hover {
          transform: translateY(-3px);
          border-color: rgba(207,143,58,0.45);
          box-shadow:
            0 0 0 1px rgba(207,143,58,0.30),
            0 0 24px rgba(207,143,58,0.16),
            0 12px 40px rgba(207,143,58,0.10);
        }

        .cat-product-media {
          position: relative;
          aspect-ratio: 1/1;
          overflow: hidden;
          background:
            radial-gradient(ellipse at 30% 20%, rgba(207,143,58,0.10), transparent 55%),
            linear-gradient(160deg, rgba(90,44,16,0.55) 0%, rgba(20,10,4,0.85) 100%);
          border-bottom: 1px solid rgba(207,143,58,0.18);
        }
        .cat-product-media::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            repeating-linear-gradient(135deg, rgba(207,143,58,0.05) 0, rgba(207,143,58,0.05) 1px, transparent 1px, transparent 16px);
          pointer-events: none;
        }
        .cat-product-img {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.6s ease;
        }
        .cat-product-card:hover .cat-product-img { transform: scale(1.04); }

        /* Degrade debaixo pra cima — cobre marca d'água */
        .cat-product-shade {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(
            to top,
            rgba(20,10,4,0.82) 0%,
            rgba(20,10,4,0.55) 8%,
            rgba(20,10,4,0.25) 20%,
            rgba(20,10,4,0.08) 32%,
            transparent 44%
          );
        }

        .cat-product-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cat-product-monogram {
          font-size: 96px;
          line-height: 1;
          color: rgba(207,143,58,0.32);
          font-weight: 400;
          letter-spacing: -0.02em;
          transition: color 0.3s ease, transform 0.4s ease;
        }
        .cat-product-card:hover .cat-product-monogram {
          color: rgba(207,143,58,0.55);
          transform: scale(1.04);
        }
        .cat-product-num {
          position: absolute;
          top: 16px;
          right: 16px;
          font-size: 10px;
          letter-spacing: 0.3em;
          color: var(--amber-light);
          opacity: 0.6;
          text-transform: uppercase;
        }
        .cat-product-corner {
          position: absolute;
          width: 18px;
          height: 18px;
          pointer-events: none;
        }
        .cat-product-corner-tl {
          top: 12px;
          left: 12px;
          border-top: 1px solid rgba(207,143,58,0.45);
          border-left: 1px solid rgba(207,143,58,0.45);
        }
        .cat-product-corner-br {
          bottom: 12px;
          right: 12px;
          border-bottom: 1px solid rgba(207,143,58,0.45);
          border-right: 1px solid rgba(207,143,58,0.45);
        }

        .cat-product-body {
          padding: 22px 22px 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .cat-product-name {
          font-size: 22px;
          line-height: 1.15;
          margin-bottom: 8px;
        }
        .cat-product-desc {
          font-size: 13.5px;
          line-height: 1.6;
          margin-bottom: 16px;
          flex-grow: 1;
        }
        .cat-product-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 18px;
          background: rgba(207,143,58,0.10);
          border: 1px solid rgba(207,143,58,0.50);
          color: var(--amber-light);
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 600;
          border-radius: 2px;
          align-self: stretch;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .cat-product-cta svg {
          color: #25d366;
        }
        .cat-product-card:hover .cat-product-cta {
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(207,143,58,0.18);
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
          .cat-products-grid { grid-template-columns: repeat(2, 1fr); }
          .cat-others-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .cat-products-grid { grid-template-columns: 1fr; }
          .cat-product-monogram { font-size: 72px; }
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
