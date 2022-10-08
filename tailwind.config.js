/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  screens: {
    sm: '480px'
  },
  theme: {
    extend: {
      spacing: {
        '56px': '3.5rem',
      },

      backgroundImage: {
        'assetbistoyek': "url('asset21.jpeg')",
        'categoryTwo': "url('category-2.jpg.webp')",
        'categoryThree': "url('category-3.jpg.webp')",
        'categoryFour': "url('category-4.jpg.webp')",
        'categorySix': "url('category8.jpg')"
      }
    },
  },
  plugins: [require("daisyui")],
}
