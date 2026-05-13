import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import { CATEGORIES, PRIMARY_PHONE } from '@/lib/data'
import { wppLink } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Produtos — Marion Madeiras',
  description:
    'Todos os produtos da Marion Madeiras divididos por categoria: construção, rural, telhado, pintura, fechaduras, esquadrias, móveis e decks.',
}

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

export default function CategoriesIndexPage() {
  const wppHref = wppLink(PRIMARY_PHONE, 'Olá! Vim pelo site e gostaria de solicitar um orçamento.')

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="cat-index-hero relative bg-brown-deep overflow-hidden"
          style={{ paddingTop: 72 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/cat-construcao.png')" }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background: `
                linear-gradient(180deg, rgba(20,10,4,0.55) 0%, rgba(20,10,4,0.75) 50%, rgba(20,10,4,0.97) 100%),
                linear-gradient(90deg, rgba(20,10,4,0.7) 0%, rgba(20,10,4,0.2) 60%, rgba(20,10,4,0.55) 100%)
              `,
            }}
          />
          <span className="cat-rule cat-rule-top" aria-hidden="true" />

          <div className="container-marion relative z-[2]" style={{ paddingTop: 110, paddingBottom: 90 }}>
            <nav
              className="font-mono text-amber-light"
              style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.85, marginBottom: 28 }}
              aria-label="Trilha de navegação"
            >
              <Link href="/" className="hover:text-cream-light transition-colors">Início</Link>
              <span style={{ margin: '0 10px', opacity: 0.55 }}>/</span>
              <span style={{ color: 'var(--cream-base)' }}>Produtos</span>
            </nav>

            <div
              className="inline-flex items-center gap-[14px] font-mono text-amber-light"
              style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 24 }}
            >
              <span style={{ width: 28, height: 1, background: 'var(--amber-base)', display: 'inline-block' }} />
              Catálogo completo
            </div>

            <h1 className="font-cormorant font-[500] text-cream-base hero-title-size" style={{ marginBottom: 24, maxWidth: 900 }}>
              Produtos por <em className="text-amber-light italic font-[400]">categoria</em>
              <span className="italic text-amber-base" style={{ fontWeight: 400, fontSize: '0.85em', verticalAlign: '0.05em' }}>.</span>
            </h1>

            <p
              className="font-dmsans font-light text-cream-base/75"
              style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 620 }}
            >
              Tudo que a Marion oferece, organizado em oito categorias. Da estrutura ao acabamento — escolha a linha e veja os itens disponíveis.
            </p>
          </div>
        </section>

        {/* Categories grid */}
        <section
          className="cat-index relative text-cream-base"
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
            <div className="cat-index-head">
              <div>
                <div
                  className="font-mono text-amber-light"
                  style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 18, display: 'inline-flex', alignItems: 'center', gap: 14 }}
                >
                  <span style={{ width: 28, height: 1, background: 'var(--amber-base)' }} />
                  Por categoria
                </div>
                <h2 className="font-cormorant font-[500] text-cream-base section-title-size" style={{ lineHeight: 1.05 }}>
                  Oito linhas, <em className="italic text-amber-light">um padrão</em>.
                </h2>
              </div>
              <p className="font-dmsans font-light text-cream-base/65" style={{ fontSize: 15, lineHeight: 1.7, maxWidth: 360 }}>
                Clique na categoria para ver os itens disponíveis, especificações e falar diretamente com a Marion via WhatsApp.
              </p>
            </div>

            <div className="cat-index-grid">
              {CATEGORIES.map((c) => (
                <Link key={c.slug} href={`/categorias/${c.slug}`} className="cat-index-card">
                  <div
                    className="cat-index-img"
                    style={{ backgroundImage: `url('${c.image}')` }}
                    aria-hidden="true"
                  />
                  <div className="cat-index-overlay" aria-hidden="true" />
                  <div className="cat-index-body">
                    <h3 className="font-cormorant font-[500] text-cream-light cat-index-title">
                      {c.name}.
                    </h3>
                    <span className="cat-index-arrow font-dmsans font-semibold text-amber-light">
                      Ver categoria <ArrowIcon />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="cat-cta-inline">
              <div>
                <div
                  className="font-mono text-amber-light"
                  style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 12, opacity: 0.85 }}
                >
                  Não achou o que procura?
                </div>
                <h3 className="font-cormorant font-[500] text-cream-base" style={{ fontSize: 30, lineHeight: 1.15, maxWidth: 560 }}>
                  Fale com a gente. Atendimento <em className="italic text-amber-light">direto</em> e <em className="italic text-amber-light">sem burocracia</em>.
                </h3>
              </div>
              <a className="btn-primary" href={wppHref} target="_blank" rel="noopener noreferrer">
                <WppIcon />
                Falar no WhatsApp
              </a>
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

        .cat-index-head {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 60px;
          align-items: end;
          padding-bottom: 36px;
          border-bottom: 1px solid rgba(207,143,58,0.18);
          margin-bottom: 56px;
        }

        .cat-index-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .cat-index-card {
          position: relative;
          aspect-ratio: 4/5;
          overflow: hidden;
          background: var(--brown-deep);
          display: block;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .cat-index-card:hover {
          transform: translateY(-3px);
          box-shadow:
            0 0 0 1px rgba(207,143,58,0.35),
            0 0 24px rgba(207,143,58,0.18),
            0 12px 40px rgba(207,143,58,0.10);
        }
        .cat-index-img {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.6s ease;
        }
        .cat-index-card:hover .cat-index-img { transform: scale(1.05); }
        .cat-index-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(20,10,4,0) 25%, rgba(20,10,4,0.95) 100%);
        }
        .cat-index-body {
          position: absolute;
          inset: auto 0 0 0;
          padding: 26px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .cat-index-title {
          font-size: 28px;
          line-height: 1.1;
          margin-top: 4px;
          margin-bottom: 4px;
        }
        .cat-index-desc {
          font-size: 13px;
          line-height: 1.55;
          margin-bottom: 14px;
          max-width: 90%;
        }
        .cat-index-arrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          transition: gap 0.3s ease, color 0.3s ease;
        }
        .cat-index-card:hover .cat-index-arrow { gap: 14px; color: var(--cream-light); }

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

        @media (max-width: 1100px) {
          .cat-index-head {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .cat-index-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .cat-index-grid { grid-template-columns: 1fr; }
          .cat-cta-inline { padding: 28px 24px; gap: 20px; }
        }
      `}</style>
    </>
  )
}
