import { Command } from 'commander';
import { z } from 'zod';

import { generateREADME } from '@/lib/generate';

const readmeOptionsSchema = z.object({
  dir: z.string(),
  outDir: z.string(),
});

export const readme = new Command()
  .name('readme')
  .description('README.md generator for @algorithm/solution')
  .option('-d, --dir <dir>', 'Solution directory', '.')
  .option('-o, --out-dir <dir>', 'Output directory', '.')
  .action(async (opts) => {
    try {
      const options = readmeOptionsSchema.parse(opts);
      await generateREADME(options.dir, options.outDir);
    } catch (error) {
      console.error(error);
    }
  });
