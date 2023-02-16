// tailwind.config.js
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
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
        'twitter': 'url(/images/twitter.svg)',
        'instagram': 'url(/images/instagram.svg)',
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
    require('@tailwindcss/aspect-ratio'),
  ],
}
