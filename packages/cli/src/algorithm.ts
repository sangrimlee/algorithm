#!/usr/bin/env node

import * as path from 'node:path';

import * as dotenv from 'dotenv';
import { Command } from 'commander';

import {
  generateLeetCode,
  generateLeetCodeTemplate,
  generateLeetCodeDailyChallenge,
  generateProgrammers,
} from '@/lib/generate';
import { choiceGenereateTypePrompt, leetCodePrompt, programmersPrompt } from '@/lib/prompt';

dotenv.config();

const program = new Command('Code template Generator for @algorithm');

program.option('-d, --dir <dir>', 'Output directory', '.').parse();

interface AlgorithmOptions {
  dir: string;
}

const options = program.opts<AlgorithmOptions>();

const outputDir = path.join(process.cwd(), options.dir);

async function main() {
  const generateType = await choiceGenereateTypePrompt();
  switch (generateType) {
    case 'LeetCode': {
      const id = await leetCodePrompt();
      await generateLeetCode(outputDir, id);
      return;
    }
    case 'LeetCode Template': {
      const id = await leetCodePrompt();
      await generateLeetCodeTemplate(outputDir, id);
      return;
    }
    case 'LeetCode Daily Challenge': {
      await generateLeetCodeDailyChallenge(outputDir);
      return;
    }
    case 'Programmers': {
      const problemNumber = await programmersPrompt();
      await generateProgrammers(outputDir, problemNumber);
      return;
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
  .catch((error: unknown) => {
    console.error(error);
  });
