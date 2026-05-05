# Marion Madeiras

Landing page institucional da Marion Madeiras — madeireira do Espírito Santo, com lojas em Guarapari, Cachoeiro de Itapemirim e Anchieta.

## Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**

## Desenvolvimento

```bash
npm install
npm run dev
```

Servidor disponível em [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Estrutura

- `app/` — rotas do App Router (home, `/categorias`, `/categorias/[slug]`)
- `components/` — componentes reutilizáveis (Navbar, Hero, Sections, Footer)
- `lib/data.ts` — config das lojas, produtos e categorias
- `hooks/` — utilities (ex.: `useReveal` para reveal on scroll)
- `public/` — imagens e assets estáticos
