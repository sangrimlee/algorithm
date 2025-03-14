import { Command } from 'commander';
import { z } from 'zod';

import { solutionPrompt } from '@/lib/prompt';
import { generateLeetCodeById, generateLeetCodeDailyChallenge } from '@/lib/generate/leetcode';
import { generateProgrammers } from '@/lib/generate/programmers';
import { handleError } from '@/utils/handle-error';

const solutionOptionsSchema = z.object({
  outDir: z.string(),
});

export const solution = new Command()
  .name('solution')
  .description('@algorithm/solution의 문제 풀이 템플릿 생성')
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
        case 'Programmers':
          await generateProgrammers(options.outDir);
          return;
        default:
          throw new Error('지원하지 않는 문제입니다.');
      }
    } catch (error) {
      handleError(error);
    }
  });
