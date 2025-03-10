import { Command } from 'commander';
import { z } from 'zod';

import { handleError } from '@/utils/handle-error';
import { logger } from '@/utils/logger';

const pageOptionsSchema = z.object({
  dir: z.string(),
  outDir: z.string(),
  force: z.boolean(),
});

export const page = new Command()
  .name('page')
  .description('Page generator for @algorithm/website')
  .option('-d, --dir <dir>', 'Solution directory', '.')
  .option('-o, --out-dir <dir>', 'Output directory', '.')
  .option('--force', 'Force generate page', false)
  .action(async (opts) => {
    try {
      const options = await pageOptionsSchema.parseAsync(opts);
      logger.log(options);
    } catch (error) {
      handleError(error);
    }
  });
