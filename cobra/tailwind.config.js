/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'titillium': ['Titillium Web', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}

