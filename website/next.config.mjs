import nextra from 'nextra';

import './src/env.mjs';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.tsx',
});

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default withNextra(nextConfig);
