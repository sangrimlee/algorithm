const defaultTheme = require('tailwindcss/defaultTheme');
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        logo: ['var(--font-logo)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    ({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'bg-grid': (value) => ({
            backgroundColor: 'transparent',
            backgroundImage: `linear-gradient(${value} 1px, transparent 1px), linear-gradient(to right, ${value} 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' },
      );
    },
  ],
};
