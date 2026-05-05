import Image from 'next/image'
import Link from 'next/link'
import { PRIMARY_PHONE, CATEGORIES } from '@/lib/data'
import { wppLink } from '@/lib/whatsapp'

const WPP_ICON = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const ChevronDown = (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M6 9l6 6 6-6"/>
  </svg>
)

const ArrowIcon = (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

export default function Navbar() {
  const orcamentoLink = wppLink(PRIMARY_PHONE, 'Olá! Gostaria de solicitar um orçamento.')

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(26,12,4,0.78)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(207,143,58,0.18)',
      }}
    >
      <div className="container-marion flex items-center justify-between" style={{ height: 72 }}>
        <a href="/" aria-label="Marion Madeiras">
          <Image
            src="/m-colorido-logo.png"
            alt="Marion Madeiras"
            width={120}
            height={42}
            className="w-auto object-contain"
            style={{ height: 42 }}
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-9" aria-label="Navegação principal">
          {/* Produtos with dropdown */}
          <div className="nav-dropdown relative">
            <Link
              href="/categorias"
              className="nav-link nav-link-trigger inline-flex items-center gap-1.5 font-mono text-cream-base/65 hover:text-amber-light transition-colors duration-200"
              style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500 }}
            >
              Produtos
              <span className="nav-chevron">{ChevronDown}</span>
            </Link>

            <div className="nav-menu" role="menu" aria-label="Categorias de produtos">
              <span className="nav-menu-spacer" aria-hidden="true" />
              <div className="nav-menu-inner">
                <span
                  className="font-mono text-amber-light"
                  style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.65 }}
                >
                  Por categoria
                </span>
                <ul className="nav-menu-list">
                  {CATEGORIES.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/categorias/${c.slug}`}
                        className="nav-menu-item font-dmsans text-cream-base/80 hover:text-amber-light"
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/categorias"
                  className="nav-menu-foot font-mono text-amber-light hover:text-cream-light"
                >
                  Ver todos os produtos {ArrowIcon}
                </Link>
              </div>
            </div>
          </div>

          {[
            { label: 'Sobre',        href: '/#sobre'        },
            { label: 'Diferenciais', href: '/#diferenciais' },
            { label: 'Lojas',        href: '/#lojas'        },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="nav-link font-mono text-cream-base/65 hover:text-amber-light transition-colors duration-200"
              style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500 }}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href={orcamentoLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Solicitar orçamento via WhatsApp"
          className="inline-flex items-center gap-2 text-cream-light transition-all duration-200 hover:opacity-90"
          style={{
            background: '#BA4D3E',
            padding: '11px 18px',
            borderRadius: 2,
            fontSize: 11,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontWeight: 600,
            border: '1px solid #BA4D3E',
          }}
        >
          {WPP_ICON}
          Orçamento
        </a>
      </div>

      <style>{`
        .nav-chevron {
          display: inline-flex;
          opacity: 0.55;
          transform: translateY(0);
          transition: transform 0.25s ease, opacity 0.25s ease;
        }
        .nav-dropdown:hover .nav-chevron,
        .nav-dropdown:focus-within .nav-chevron {
          opacity: 1;
          transform: rotate(180deg);
        }

        .nav-menu {
          position: absolute;
          top: 100%;
          left: -24px;
          min-width: 280px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-6px);
          transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s linear 0.22s;
          z-index: 60;
        }
        .nav-dropdown:hover .nav-menu,
        .nav-dropdown:focus-within .nav-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          transition-delay: 0s, 0s, 0s;
        }
        .nav-menu-spacer {
          display: block;
          height: 18px;
        }
        .nav-menu-inner {
          background: rgba(20, 10, 4, 0.96);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(207,143,58,0.22);
          border-radius: 2px;
          padding: 18px 6px 10px;
          box-shadow:
            0 0 0 1px rgba(207,143,58,0.05),
            0 18px 48px rgba(0,0,0,0.55),
            0 0 30px rgba(207,143,58,0.08);
        }
        .nav-menu-inner > span:first-child {
          padding: 0 18px;
          display: block;
          margin-bottom: 10px;
        }
        .nav-menu-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-menu-item {
          display: flex;
          align-items: center;
          padding: 9px 18px;
          font-size: 13.5px;
          letter-spacing: 0.01em;
          text-decoration: none;
          transition: background 0.18s ease, color 0.18s ease, padding-left 0.22s ease;
          position: relative;
        }
        .nav-menu-item::before {
          content: "";
          position: absolute;
          left: 18px;
          top: 50%;
          width: 0;
          height: 1px;
          background: var(--amber-base);
          transition: width 0.22s ease;
        }
        .nav-menu-item:hover {
          background: rgba(207,143,58,0.06);
          padding-left: 32px;
        }
        .nav-menu-item:hover::before {
          width: 8px;
        }
        .nav-menu-foot {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 18px 6px;
          margin-top: 8px;
          border-top: 1px solid rgba(207,143,58,0.12);
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s ease, gap 0.2s ease;
        }
        .nav-menu-foot:hover { gap: 14px; }
      `}</style>
    </header>
  )
}
