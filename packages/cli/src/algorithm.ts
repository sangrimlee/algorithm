#!/usr/bin/env node
import path from 'node:path';

import dotenv from 'dotenv';

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

const options = program.opts();

const outputDir = path.join(process.cwd(), options.dir);

async function main() {
  const generateType = await choiceGenereateTypePrompt();
  switch (generateType) {
    case 'LeetCode': {
      const id = await leetCodePrompt();
      return await generateLeetCode(outputDir, id);
    }
    case 'LeetCode Template': {
      const id = await leetCodePrompt();
      return await generateLeetCodeTemplate(outputDir, id);
    }
    case 'LeetCode Daily Challenge': {
      return await generateLeetCodeDailyChallenge(outputDir);
    }
    case 'Programmers': {
      const problemNumber = await programmersPrompt();
      return await generateProgrammers(outputDir, problemNumber);
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
