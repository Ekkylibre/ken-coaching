/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Cormorant', 'serif'],
      },
      colors: {
        gold: {
          50: '#FDF9F3',
          100: '#FAF2E6',
          200: '#F5E5CC',
          300: '#F0D8B3',
          400: '#EBCB99',
          500: '#E6BE80',
          600: '#C4A269', // Main gold
          700: '#A38654',
          800: '#826B43',
          900: '#615032',
        },
        dark: {
          50: '#F7F7F8',
          100: '#EEEEF1',
          200: '#DDDDE3',
          300: '#CCCED6',
          400: '#BBBFC8',
          500: '#AAAFBB',
          600: '#1A1A1A', // Main dark background
          700: '#141414',
          800: '#0F0F0F',
          900: '#0A0A0A',
        },
      },
    },
  },
  plugins: [],
};