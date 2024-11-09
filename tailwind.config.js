/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2d5a27',
          dark: '#1e3d1a',
        },
        secondary: {
          DEFAULT: '#8B4513',
          light: '#A0522D',
        },
        dark: {
          DEFAULT: '#1a1a1a',
          light: '#262626',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};