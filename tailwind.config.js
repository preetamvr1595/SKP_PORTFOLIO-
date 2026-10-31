/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#CCFF00',       /* Neon Lime */
          dark: '#CCFF00',          /* Neon Lime */
          light: 'rgba(204, 255, 0, 0.1)',
        },
        primary: '#000000',         /* Pure Black */
        cream: '#000000',           /* Pure Black */
      },
      fontFamily: {
        clash: ['Space Mono', 'monospace'],
        satoshi: ['Space Mono', 'monospace'],
        mono: ['Space Mono', 'monospace'],
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-delayed': 'float-delayed 4s ease-in-out infinite 1s',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        floatDelayed: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(204, 255, 0, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(204, 255, 0, 0.5)' },
        }
      },
    },
  },
  plugins: [],
}