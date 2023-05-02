#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command('Markdown Generator for @algorithm');

program.option('--dir <dir>', 'Solution directory').parse();

const options = program.opts();

const solutionDir = options.dir ? options.dir : '.';

async function main() {
  console.log(solutionDir);
}

main()
  .then(() => {
    console.log('🚀  Finished! Check out your README.md');
  })
  .catch((error) => {
    console.error(error);
  });
