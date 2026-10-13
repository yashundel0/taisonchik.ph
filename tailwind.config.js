/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F7F4EF',
          50: '#FDFBF8',
          100: '#F7F4EF',
          200: '#F0EBE2',
          300: '#E9E1D7',
          400: '#D8CCC0',
          500: '#C7B7A8',
          600: '#B7A797',
          700: '#8B8178',
          800: '#5C544E',
          900: '#292725',
        },
        graphite: '#292725',
        taupe: '#B7A797',
        warm: '#8B8178',
        beige: '#E9E1D7',
        milk: '#F7F4EF',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        sans: ['Inter', 'Manrope', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.3em',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-slow': 'fadeIn 1.5s ease-out forwards',
        'scale-in': 'scaleIn 1s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(1.05)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
