import type { NextConfig } from 'next';

import './src/env';

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['next-mdx-remote'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
} satisfies NextConfig;

export default nextConfig;
