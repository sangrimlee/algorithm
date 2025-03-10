import { Command } from 'commander';
import { z } from 'zod';

import { solutionPrompt } from '@/lib/prompt';
import { generateLeetCodeById, generateLeetCodeDailyChallenge } from '@/lib/generate/leetcode';
import { handleError } from '@/utils/handle-error';

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
      const choice = await solutionPrompt();
      switch (choice) {
        case 'LeetCode':
          await generateLeetCodeById(options.outDir);
          return;
        case 'LeetCode Daily Challenge':
          await generateLeetCodeDailyChallenge(options.outDir);
          return;
        default:
          throw new Error('지원하지 않는 문제입니다.');
      }
    } catch (error) {
      handleError(error);
    }
  });
