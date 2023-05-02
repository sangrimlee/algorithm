import { defineConfig } from 'tsup';

export default defineConfig((options) => {
  return {
    minify: !options.watch,
    entry: {
      algorithm: 'src/algorithm.ts',
      markdown: 'src/markdown.ts',
    },
    format: ['cjs'],
    clean: true,
  };
});
