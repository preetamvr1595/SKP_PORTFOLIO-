/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bwYellow: '#fffa56',
        bwDark: '#142127',
        bwDarker: '#0e181c',
        bwDarkSlate: '#263f4a',
        bwMuted: '#5a6e78',
        bwLavender: '#dcd3f7',
        bwIceBlue: '#d2e7f5',
        bwNeutralLight: '#f8f8f6',
        bwBorder: '#142127',
        bwBorderLight: 'rgba(20, 33, 39, 0.12)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        editorial: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'marquee': 'marquee-scroll 45s linear infinite',
        'marquee-reverse': 'marquee-scroll-reverse 45s linear infinite',
        'orbit': 'rotate360 90s linear infinite',
      },
      keyframes: {
        'marquee-scroll': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-scroll-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        rotate360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
}