const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{html,js,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Oswald',...defaultTheme.fontFamily.sans],
          serif: ['Oswald', 'serif'],
        },
      },
    },
    plugins: [],
  }