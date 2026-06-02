import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          deep:  '#1a0c04',
          dark:  '#ece2cb',
          mid:   '#5a2c10',
          base:  '#7d3f17',
        },
        wood: {
          warm:  '#BA4D3E',
        },
        amber: {
          base:  '#cf8f3a',
          light: '#e0b46a',
          soft:  '#f0d090',
        },
        cream: {
          dark:  '#e8d5b5',
          base:  '#f4ead6',
          light: '#fbf5e8',
        },
        off:   '#fefaf3',
      },
      fontFamily: {
        display:   ['var(--font-display)', 'system-ui', 'sans-serif'],
        dmsans:    ['var(--font-dmsans)', 'system-ui', 'sans-serif'],
        mono:      ['var(--font-jetbrains)', 'monospace'],
      },
      maxWidth: {
        container: '1320px',
      },
    },
  },
  plugins: [],
}

export default config
