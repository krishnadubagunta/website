// tailwind.config.js
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['darkmode-on', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
      },
      backgroundImage: {
        'hero': 'url(/images/web/hero.jpg)',
      },
      cursor: {
        'zoom-in': 'zoom-in'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
