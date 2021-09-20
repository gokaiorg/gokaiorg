module.exports = {
  purge: {
    enabled: true,
    preserveHtmlElements: true,
    mode: 'layers',
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          button: '#05CBC3',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
