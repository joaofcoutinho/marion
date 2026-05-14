import Image from 'next/image'
import { PRIMARY_PHONE, INSTAGRAM } from '@/lib/data'
import { wppLink } from '@/lib/whatsapp'

export default function Footer() {
  const wppHref = wppLink(PRIMARY_PHONE, 'Olá! Gostaria de falar com a Marion Madeiras.')

  return (
    <footer className="text-cream-base/60" style={{ background: '#0d0704', padding: '80px 0 32px' }}>
      <div className="container-marion">
        {/* 4-col grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: 60,
            paddingBottom: 56,
            borderBottom: '1px solid rgba(244,234,214,0.1)',
          }}
        >
          {/* Brand col */}
          <div>
            <Image
              src="/logo-branca.png"
              alt="Marion Madeiras"
              width={160}
              height={56}
              className="w-auto object-contain"
              style={{ height: 56, marginBottom: 14 }}
            />
            <div
              className="font-cormorant italic text-amber-light"
              style={{ fontSize: 16, marginBottom: 24 }}
            >
              — Madeiras nobres do Espírito Santo —
            </div>
            <p
              className="font-dmsans text-cream-base/50"
              style={{ fontSize: 13, lineHeight: 1.7, maxWidth: 360 }}
            >
              Madeiras selecionadas direto da fábrica para construção, mobiliário e
              acabamento. Qualidade e tradição familiar há mais de quatro décadas.
            </p>
          </div>

          {/* Navegar */}
          <div>
            <h4
              className="font-mono text-amber-base"
              style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 20, fontWeight: 500 }}
            >
              Navegar
            </h4>
            {[
              { label: 'Produtos',     href: '/categorias'    },
              { label: 'Sobre',        href: '/#sobre'        },
              { label: 'Diferenciais', href: '/#diferenciais' },
              { label: 'Lojas',        href: '/#lojas'        },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="block font-dmsans text-cream-base/60 hover:text-amber-light transition-colors duration-200"
                style={{ fontSize: 13, marginBottom: 10, textDecoration: 'none' }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Lojas */}
          <div>
            <h4
              className="font-mono text-amber-base"
              style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 20, fontWeight: 500 }}
            >
              Lojas
            </h4>
            {[
              { label: 'Iconha (fábrica)', href: 'https://wa.me/5528999397736' },
              { label: 'Guarapari',        href: 'https://wa.me/5527997608006' },
              { label: 'Cachoeiro',        href: 'https://wa.me/5528999815860' },
              { label: 'Anchieta',         href: 'https://wa.me/5528999512829' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-dmsans text-cream-base/60 hover:text-amber-light transition-colors duration-200"
                style={{ fontSize: 13, marginBottom: 10, textDecoration: 'none' }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Contato */}
          <div>
            <h4
              className="font-mono text-amber-base"
              style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 20, fontWeight: 500 }}
            >
              Contato
            </h4>
            {[
              { label: '(27) 99760-8006',              href: wppHref,                         external: true  },
              { label: 'fiscalloja@marionmadeiras.com.br', href: 'mailto:fiscalloja@marionmadeiras.com.br', external: false },
              { label: '@marionmadeirasoficial',         href: INSTAGRAM,                       external: true  },
            ].map(({ label, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="block font-dmsans text-cream-base/60 hover:text-amber-light transition-colors duration-200"
                style={{ fontSize: 13, marginBottom: 10, textDecoration: 'none' }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex justify-between items-center flex-wrap"
          style={{ paddingTop: 32, gap: 20 }}
        >
          <p
            className="font-dmsans text-cream-base/40"
            style={{ fontSize: 11, letterSpacing: '0.04em' }}
          >
            © 2026 Marion Madeiras. Todos os direitos reservados.
          </p>

          <div className="flex" style={{ gap: 8 }}>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Marion Madeiras"
              className="foot-social flex items-center justify-center text-cream-base/60 hover:text-amber-light transition-all duration-200"
              style={{
                width: 36, height: 36,
                border: '1px solid rgba(207,143,58,0.25)',
                textDecoration: 'none',
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a
              href={wppHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da Marion Madeiras"
              className="foot-social flex items-center justify-center text-cream-base/60 hover:text-amber-light transition-all duration-200"
              style={{
                width: 36, height: 36,
                border: '1px solid rgba(207,143,58,0.25)',
                textDecoration: 'none',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .foot-social:hover { border-color: var(--amber-base) !important; }
        @media (max-width: 1100px) {
          footer .foot-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 640px) {
          footer .foot-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
