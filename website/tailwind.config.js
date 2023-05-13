const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        logo: ['var(--font-logo)', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'object-1': 'inset -30px 0px 35px #89D9F2;',
      },
    },
  },
  plugins: [],
};
