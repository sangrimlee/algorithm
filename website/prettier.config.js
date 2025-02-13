import prettierConfig from '@algorithm/prettier-config';

/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */
/** @type { PrettierConfig | TailwindConfig } */
const config = {
  ...prettierConfig,
  plugins: [...(prettierConfig.plugins ?? []), 'prettier-plugin-tailwindcss'],
  tailwindFunctions: ['cx', 'cn', 'cva'],
  tailwindStylesheet: './src/app/globals.css',
};

export default config;
