import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

/** @type {import("prettier").Config} */
const config = {
  printWidth: 100,
  semi: true,
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  trailingComma: 'all',
  plugins: [require.resolve('prettier-plugin-packagejson')],
};

export default config;
