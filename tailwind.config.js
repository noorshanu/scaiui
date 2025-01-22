/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'slide-left': {
          '0%': { left: '20%' },
          '50%': { left: '60%' },
          '100%': { left: '20%' }
        },
        'slide-left-once': {
          '0%': { left: '20%' },
          '100%': { left: '60%' }
        }
      },
      animation: {
        'slide-left': 'slide-left 5s infinite ease-in-out',
        'slide-left-once': 'slide-left-once 2s forwards ease-out'
      }
    },
  },
  plugins: [],
}

