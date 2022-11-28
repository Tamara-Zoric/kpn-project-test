/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        BLAUW: '#B7E1E0',
        ZILVER: '#4e4d4b',
        ZWART: '#1d1d1d',
        ROZE: '#f9ded7',
        WIT: '#f7f6f6',
        GRIJS: '#808080',
        GOUD: '#ffd700',
        ROOD: '#a30112',
        GOREN: '#215e7b',
      },
    },
  },
  variants: {
    display: ['group-hover'],
  },
  plugins: [],
}
