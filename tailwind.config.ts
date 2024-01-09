import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'purple': '#5115F7',
    },
    extend: {
      gridTemplateColumns: {
        'desktop': '12.5vw repeat(24, 1fr) 12.5vw',
      },
      gap: {
        'desktop': '0.625vw',
      },
      fontFamily: {
        lato: ['var(--font-lato)'],
      },
    },
  },
  plugins: [],
}
export default config
