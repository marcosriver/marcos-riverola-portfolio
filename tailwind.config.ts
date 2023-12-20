import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E8E8E8',
        secondary: '#003EDE'
      },
      animation: {
        'rotate-photo': 'rotatePhoto 1s 1'
      },
      keyframes: {
        rotatePhoto: {
          '0%': { transform: 'rotateY(0)' },
          '100%': { transform: 'rotateY(720deg)' }
        }
      }
    }
  },
  plugins: []
}
export default config
