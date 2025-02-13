import prettierConfig from 'eslint-config-prettier';

import baseConfig from './base.js';
import nextConfig from './next.js';

export const configs = {
  base: baseConfig,
  next: nextConfig,
  prettier: prettierConfig,
};

export default configs;
