import { defineConfig } from 'tsup';

export default defineConfig((options) => {
  return {
    entry: {
      algorithm: './src/algorithm.ts',
      markdown: './src/markdown.ts',
    },
    format: ['esm'],
    sourcemap: true,
    minify: !options.watch,
    clean: true,
    dts: true,
    target: 'node22',
    outDir: 'dist',
  };
});
