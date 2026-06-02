'use client'

import { useReveal } from '@/hooks/useReveal'
import { PRODUCTS, CATEGORIES } from '@/lib/data'

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

function ProductCard({ product }: { product: typeof PRODUCTS[0] }) {
  const ref = useReveal()
  const isLarge = product.span === 'feature' || product.span === 'tall'
  const hasCategoryPage = CATEGORIES.some((c) => c.slug === product.slug)
  const href = hasCategoryPage ? `/categorias/${product.slug}` : '#cta'

  return (
    <div
      ref={ref}
      className={`product-card-bento reveal product-span-${product.span} relative overflow-hidden flex flex-col cursor-pointer`}
      style={{ background: 'var(--brown-deep)' }}
    >
      <a href={href} className="absolute inset-0 z-[1]" aria-label={`Ver ${product.name}`} />

      <div
        className="product-img absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${product.image}')` }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(20,10,4,0) 30%, rgba(20,10,4,0.92) 100%)' }} />

      <div className="relative z-[2] mt-auto text-cream-base product-body">
        <h3
          className="font-display font-[500] text-cream-light"
          style={{ lineHeight: 1.1, marginBottom: 14, whiteSpace: 'pre-line' }}
        >
          {product.name}
        </h3>
        <span
          className="product-arrow inline-flex items-center gap-2 font-dmsans font-semibold text-amber-light transition-all duration-200"
          style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase' }}
        >
          Pedir orçamento <ArrowIcon />
        </span>
      </div>
    </div>
  )
}

export default function ProductsSection() {
  const ref = useReveal()

  return (
    <section
      id="produtos"
      className="relative text-cream-base products-section"
      style={{
        backgroundImage: 'url(/fundohero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(20,10,4,0.91)' }} aria-hidden="true" />

      {/* Top & bottom hairline */}
      <span className="products-rule products-rule-top" aria-hidden="true" />
      <span className="products-rule products-rule-bottom" aria-hidden="true" />

      <div className="container-marion relative z-[1]">
        {/* Header */}
        <div ref={ref} className="reveal products-head">
          <div className="section-marker">
            <span className="dash" />
            <span>Catálogo</span>
          </div>

          <h2 className="font-display font-[500] text-cream-base section-title-size products-title">
            Madeira para cada<br />
            <em className="text-amber-light italic">necessidade</em>.
          </h2>

          <p className="font-dmsans font-light text-cream-base/55 products-sub">
            Do acabamento fino à estrutura robusta. Selecionadas, tratadas e entregues com cuidado.
          </p>
        </div>

        {/* Bento grid */}
        <div className="products-grid">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}

          {/* CTA card */}
          <a
            href="/categorias"
            className="group relative flex flex-col items-start justify-between overflow-hidden product-span-std"
            style={{
              background: 'rgba(20,10,4,0.45)',
              border: '1px solid rgba(207,143,58,0.22)',
              padding: 28,
              textDecoration: 'none',
              transition: 'all 0.3s',
            }}
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: 'rgba(0,0,0,0.15)' }} />
            <div className="relative z-[2]">
              <div className="font-display font-[500] text-cream-base group-hover:text-amber-light transition-colors duration-200 cta-card-title">
                Ver todas as<br /><em className="italic text-amber-light">categorias</em>.
              </div>
              <span className="inline-flex items-center gap-2 font-dmsans font-semibold text-amber-light group-hover:gap-4 transition-all duration-200" style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
                Explorar <ArrowIcon />
              </span>
            </div>
            <span className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-500" style={{ background: 'var(--amber-base)' }} />
          </a>
        </div>
      </div>

      <style>{`
        .products-section { padding: 140px 0 130px; }

        /* Top & bottom hairline */
        .products-rule {
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          z-index: 1;
          pointer-events: none;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(207,143,58,0.45) 50%,
            transparent 100%
          );
        }
        .products-rule-top    { top: 0; }
        .products-rule-bottom { bottom: 0; }

        .products-head {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: end;
          gap: 60px;
          margin-bottom: 64px;
          padding-bottom: 32px;
          border-bottom: 1px solid rgba(207,143,58,0.18);
        }
        .products-title { text-align: center; }
        .products-sub {
          font-size: 14px;
          line-height: 1.6;
          max-width: 280px;
          margin-left: auto;
          text-align: right;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-auto-rows: 220px;
          gap: 16px;
        }
        .product-span-feature { grid-column: span 3; grid-row: span 2; }
        .product-span-tall    { grid-column: span 3; grid-row: span 2; }
        .product-span-std     { grid-column: span 2; }

        .product-body { padding: 24px; }
        .product-body h3 { font-size: 24px; }
        .product-span-feature .product-body h3,
        .product-span-tall .product-body h3 { font-size: 30px; }
        .product-desc { font-size: 13px; max-width: 280px; }
        .product-span-feature .product-desc,
        .product-span-tall .product-desc { font-size: 15px; max-width: 380px; }

        .cta-card-title { font-size: 26px; line-height: 1.15; margin-bottom: 16px; }

        /* Subtle golden hover glow */
        .product-card-bento {
          transition: box-shadow 0.4s ease, transform 0.4s ease;
          will-change: box-shadow, transform;
        }
        .product-card-bento:hover {
          box-shadow:
            0 0 0 1px rgba(207,143,58,0.35),
            0 0 24px rgba(207,143,58,0.18),
            0 12px 40px rgba(207,143,58,0.10);
          transform: translateY(-2px);
        }
        .product-card-bento:hover .product-arrow { gap: 14px !important; color: var(--cream-light) !important; }

        @media (max-width: 1100px) {
          .products-section { padding: 100px 0 80px; }
          .products-head { grid-template-columns: 1fr; gap: 16px; }
          .products-title { text-align: left; }
          .products-sub { margin-left: 0; text-align: left; max-width: 100%; }
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 260px;
          }
          .product-span-feature,
          .product-span-tall { grid-column: span 1; grid-row: span 1; }
          .product-span-std  { grid-column: span 1; }
        }

        @media (max-width: 640px) {
          .products-section { padding: 72px 0 64px; }
          .products-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 220px;
          }
          .product-span-feature,
          .product-span-tall,
          .product-span-std { grid-column: span 1; grid-row: span 1; }
          .cta-card-title { font-size: 22px; }
        }
      `}</style>
    </section>
  )
}
