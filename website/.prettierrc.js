/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 100,
  semi: true,
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  trailingComma: 'all',
  plugins: [require('prettier-plugin-tailwindcss')],
};
