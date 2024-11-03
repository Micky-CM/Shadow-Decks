/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Trade Winds', 'system-ui'],
        body: ['Lato', 'sans-serif'],
      },
      colors: {
        'night': '#2b152c',
        'liliac': {
          'dark': '#411b57',
          'soft': '#59386c',
          'light': '#ffa1fe',
        },
        'gold': '#fee56d',
        'pumpkin': '#FF7D25',
        'moon': '#f9f8fa',
      }
    },
  },
  plugins: [],
}

