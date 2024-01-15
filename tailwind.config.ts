import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '500px',
      // => @media (min-width: 500px) { ... }

      'md': '750px',
      // => @media (min-width: 750px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': {
        50: '#f5f5f5',
        100: '#e9e9e9',
        200: '#d9d9d9',
        300: '#c4c4c4',
        400: '#9d9d9d',
        900: '#000000',
      },
      'white': '#ffffff',
      'rose': '#f0ebfe',
      'purple': '#5115f7',
    },
    extend: {
      gridTemplateColumns: {
        'desktop': '12.5vw repeat(24, 1fr) 12.5vw',
      },
      gap: {
        'desktop': '0.625vw',
      },
      spacing: {
        'header-h1-top': '4.375rem',
        'header-text-top': '1.625rem',
        'header-whiteline': '2.8755rem',
      },
      fontFamily: {
        lato: ['var(--font-lato)'],
      },
    },
  },
  plugins: [],
}
export default config
