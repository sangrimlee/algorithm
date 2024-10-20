import nextra from 'nextra';

import './src/env.mjs';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.tsx',
  latex: {
    renderer: 'mathjax',
  },
  search: {
    codeblocks: false,
  },
});

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default withNextra(nextConfig);
