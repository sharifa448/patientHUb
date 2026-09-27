/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d91b8a',
        secondary: '#2d9cdb',
      }
    },
  },
  plugins: [],
}