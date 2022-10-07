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
      width: {
        '650': "40rem",
        '800': ' 50rem',
        '700': '43rem',
        '900': '56rem',
        '1600': '100rem'
      },

      backgroundImage: {
        'categoryFive': "url('category-7.jpg')",
        'categoryTwo': "url('category-2.jpg.webp')",
        'categoryThree': "url('category-3.jpg.webp')",
        'categoryFour': "url('category-4.jpg.webp')",
        'categorySix': "url('category8.jpg')"
      }
    },
  },
  plugins: [require("daisyui")],
}
