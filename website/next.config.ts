import nextra from 'nextra';
import type { NextConfig } from 'next';

import './src/env';

const withNextra = nextra({
  latex: {
    renderer: 'mathjax',
  },
  search: {
    codeblocks: false,
  },
});

const nextConfig = {
  reactStrictMode: true,
} satisfies NextConfig;

export default withNextra(nextConfig);
