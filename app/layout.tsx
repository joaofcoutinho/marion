import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dmsans',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Marion Madeiras — A natureza em cada peça',
  description: 'Madeiras de alta qualidade direto da fábrica. Deck, telhado, pisos, móveis e muito mais. Lojas em Guarapari, Cachoeiro de Itapemirim e Anchieta.',
  keywords: ['madeireira', 'madeira', 'deck', 'telhado', 'Guarapari', 'Espírito Santo'],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Marion Madeiras',
    description: 'Direto da fábrica para sua obra. Qualidade e tradição no ES.',
    siteName: 'Marion Madeiras',
    locale: 'pt_BR',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${dmSans.variable} ${jetbrains.variable}`}>
      <body className="font-dmsans bg-brown-deep text-cream-base antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
