import { Command } from 'commander';
import { z } from 'zod';

import { handleError } from '@/utils/handle-error';
import { generateREADME } from '@/lib/generate/readme';

const readmeOptionsSchema = z.object({
  dir: z.string(),
  outDir: z.string(),
});

export const readme = new Command()
  .name('readme')
  .description('@algorithm/solution의 README.md 생성')
  .option('-d, --dir <dir>', 'Solution directory', '.')
  .option('-o, --out-dir <dir>', 'Output directory', '.')
  .action(async (opts) => {
    try {
      const options = await readmeOptionsSchema.parseAsync(opts);
      await generateREADME(options.dir, options.outDir);
    } catch (error) {
      handleError(error);
    }
  });
