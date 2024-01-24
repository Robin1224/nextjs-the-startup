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
        800: '#1f1f1f',
        900: '#000000',
      },
      'white': '#ffffff',
      'rose': '#f0ebfe',
      'purple': '#5115f7',
    },
    containers: {
      'temp': '28rem',
      'main-full': '45.375rem',
      'md': '28.75rem',
      'lg': '39rem',
    },
    extend: {
      gridTemplateColumns: {
        'desktop': '1fr repeat(24, 50px) 1fr',
      },
      gridTemplateRows: {
        'md': 'auto auto auto',
      },
      gap: {
        'desktop': '0.625vw',
      },
      spacing: {
        'header-h1-top': '4.375rem',
        'header-text-top': '1.625rem',
        'header-whiteline': '2.8755rem',
        // 'col': '',
        // 'col-half': '',
        // 'col-full': '20vw',
      },
      fontFamily: {
        lato: ['var(--font-lato)'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}
export default config
