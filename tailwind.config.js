/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-light': '0 0 10px rgba(241, 220, 237, 0.5)', // Ajusta el valor según necesites
      },
    },
  },
  plugins: [],
}

