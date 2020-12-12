const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ["src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/src/images/heroPattern.jpg')",
        })
    },
  },
  variants: {
    theme: {
      colors: {
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        red: colors.red,
        yellow: colors.yellow,
        green: colors.green,
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.purple,
      }
    },
  },
  plugins: [],
}
