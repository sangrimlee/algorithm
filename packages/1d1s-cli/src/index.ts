#!/usr/bin/env node

import { Command } from 'commander';

import { generateDailyChallenge, generateProgrammersProblem } from './lib';
import { choiceGenereateTypePrompt, inputProblemNumberPrompt } from './prompt';

const program = new Command('1D1S Daily Challenge');

program.option('--dir <dir>', 'Output directory').parse();

const options = program.opts();

const outputDir = options.dir ? options.dir : '.';

async function main() {
  const generateType = await choiceGenereateTypePrompt();
  switch (generateType) {
    case 'LeetCode Daily Challenge': {
      await generateDailyChallenge(outputDir);
      break;
    }
    case 'Programmers': {
      const problemNumber = await inputProblemNumberPrompt();
      await generateProgrammersProblem(outputDir, problemNumber);
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
