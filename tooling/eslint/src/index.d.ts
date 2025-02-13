import type { Config, ConfigArray } from 'typescript-eslint';

export const configs: {
  base: ConfigArray;
  next: ConfigArray;
  prettier: { rules: Record<string, 0 | 'off'> };
};

export = configs;
