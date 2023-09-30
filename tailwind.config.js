/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#121121",
        "editorBackground": "#333",
      },
      fontFamily: {
        // https://tailwindcss.com/docs/font-family#customizing
        sans: [
          'Sedgwick Ave Display'
        ],
      },
    },
  },
  plugins: [],
}