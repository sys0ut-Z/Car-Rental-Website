/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors : {
        primary : "#ffc727", /* shade of yellow */
        dark : "#111111",
      }
    },
  },
  plugins: [],
}

