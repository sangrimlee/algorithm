import { defineConfig } from 'tsup';

export default defineConfig((options) => {
  return {
    minify: !options.watch,
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    clean: true,
  };
});
