import { Command } from 'commander';
import { z } from 'zod';

import { handleError } from '@/utils/handle-error';
import { logger } from '@/utils/logger';

const solutionOptionsSchema = z.object({
  outDir: z.string(),
});

export const solution = new Command()
  .name('solution')
  .description('Generate template for @algorithm/solution')
  .option('-d, --out-dir <dir>', 'Output directory', '.')
  .action(async (opts) => {
    try {
      const options = await solutionOptionsSchema.parseAsync(opts);
      logger.log(options);
    } catch (error) {
      handleError(error);
    }
  });
