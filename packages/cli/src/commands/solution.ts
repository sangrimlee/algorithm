import { Command } from 'commander';
import { z } from 'zod';

import {
  generateLeetCode,
  generateLeetCodeTemplate,
  generateLeetCodeDailyChallenge,
  generateProgrammers,
} from '@/lib/generate';
import { choiceGenereateTypePrompt, leetCodePrompt, programmersPrompt } from '@/lib/prompt';
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
      const options = solutionOptionsSchema.parse(opts);
      const generateType = await choiceGenereateTypePrompt();
      switch (generateType) {
        case 'LeetCode': {
          const id = await leetCodePrompt();
          await generateLeetCode(options.outDir, id);
          return;
        }
        case 'LeetCode Template': {
          const id = await leetCodePrompt();
          await generateLeetCodeTemplate(options.outDir, id);
          return;
        }
        case 'LeetCode Daily Challenge': {
          await generateLeetCodeDailyChallenge(options.outDir);
          return;
        }
        case 'Programmers': {
          const problemNumber = await programmersPrompt();
          await generateProgrammers(options.outDir, problemNumber);
          return;
        }
        default: {
          throw new Error('🚧 Not Implemented. Work in progress.');
        }
      }
    } catch (error) {
      handleError(error);
    }
  });
