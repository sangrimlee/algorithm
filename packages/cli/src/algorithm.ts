#!/usr/bin/env node
import path from 'node:path';

import { Command } from 'commander';

import {
  generateLeetCode,
  generateLeetCodeDailyChallenge,
  generateProgrammers,
} from '@/lib/generate';
import { choiceGenereateTypePrompt, leetCodePrompt, programmersPrompt } from '@/lib/prompt';

const program = new Command('Code template Generator for @algorithm');

program.option('-d, --dir <dir>', 'Output directory', '.').parse();

const options = program.opts();

const outputDir = path.join(process.cwd(), options.dir);

async function main() {
  const generateType = await choiceGenereateTypePrompt();
  switch (generateType) {
    case 'LeetCode': {
      const titleSlug = await leetCodePrompt();
      await generateLeetCode(outputDir, titleSlug);
      break;
    }
    case 'Programmers': {
      const problemNumber = await programmersPrompt();
      await generateProgrammers(outputDir, problemNumber);
      break;
    }
    case 'LeetCode Daily Challenge': {
      await generateLeetCodeDailyChallenge(outputDir);
      break;
    }
    default: {
      throw new Error('🚧 Not Implemented. Work in progress.');
    }
  }
}

main()
  .then(() => {
    console.log("🚀  Finished! Let's Coding🔥🔥");
  })
  .catch((error) => {
    console.error(error);
  });
