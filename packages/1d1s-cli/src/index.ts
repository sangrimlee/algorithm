#!/usr/bin/env node

import { Command } from 'commander';
import { generateDailyChallenge } from './lib';

const program = new Command('1D1S Daily Challenge');

program
  .option('--dir <dir>', 'Output directory')
  .option('-d, --daily', 'LeetCode Daily Challenge')
  .parse();

const options = program.opts();

const outputDir = options.dir ? options.dir : '.';
const isDaily = options.daily;

if (isDaily) {
  console.log('🎉  Generate LeetCode Daily Challenge Template');
  generateDailyChallenge(outputDir).then(() => {
    console.log("🚀  Finished! Let's Coding🔥🔥");
  });
} else {
  console.error('🚧 Not Implemented. Work in progress.');
}
