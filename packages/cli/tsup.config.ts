import { defineConfig } from 'tsup';

export default defineConfig((options) => {
  return {
    minify: !options.watch,
    entry: {
      algorithm: 'src/algorithm.ts',
    },
    format: ['cjs'],
    clean: true,
  };
});
