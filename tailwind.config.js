/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'water-float': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.5' },
          '25%': { transform: 'translate(20px, -30px) scale(1.05)', opacity: '0.7' },
          '50%': { transform: 'translate(-15px, 20px) scale(0.95)', opacity: '0.6' },
          '75%': { transform: 'translate(25px, 15px) scale(1.02)', opacity: '0.65' },
        },
        'fade-in': { to: { opacity: '1' } },
        'slide-up': { to: { opacity: '1', transform: 'translateY(0)' } },
        'float': {
          '0%, 100%': { transform: 'translateY(-50%) translateY(0)' },
          '50%': { transform: 'translateY(-50%) translateY(-15px)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.1)' },
        },
        'overlay-glow': {
          '0%, 100%': { opacity: '1', filter: 'drop-shadow(0 0 8px rgba(34,197,94,0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 14px rgba(34,197,94,0.6))' },
        },
        'progress-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'overlay-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        'overlay-pulse': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.02)' },
        },
      },
      animation: {
        'water-float': 'water-float 8s ease-in-out infinite',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'slide-up': 'slide-up 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'overlay-glow': 'overlay-glow 2.5s ease-in-out infinite',
        'progress-pulse': 'progress-pulse 2s ease-in-out infinite',
        'overlay-float': 'overlay-float 3s ease-in-out infinite',
        'overlay-pulse': 'overlay-pulse 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
