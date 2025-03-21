import { Command } from 'commander';
import { z } from 'zod';

import { handleError } from '@/utils/handle-error';
import { generatePage } from '@/lib/generate/page';

const pageOptionsSchema = z.object({
  dir: z.string(),
  outDir: z.string(),
});

export const page = new Command()
  .name('page')
  .description('website의 페이지 템플릿 생성')
  .option('-d, --dir <dir>', 'Solution directory', '.')
  .option('-o, --out-dir <dir>', 'Output directory', '.')
  .action(async (opts) => {
    try {
      const options = await pageOptionsSchema.parseAsync(opts);
      await generatePage(options.dir, options.outDir);
    } catch (error) {
      handleError(error);
    }
  });
