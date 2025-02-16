import prettierConfig from 'eslint-config-prettier';

import baseConfig from './base.js';
import nextConfig from './next.js';
import jestConfig from './jest.js';

export const configs = {
  base: baseConfig,
  next: nextConfig,
  jest: jestConfig,
  prettier: prettierConfig,
};

export default configs;
