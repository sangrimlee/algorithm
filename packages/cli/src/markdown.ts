#!/usr/bin/env node

import path from 'node:path';
import { Command } from 'commander';

import { generateREADME } from './lib/generate';

const program = new Command('Markdown Generator for @algorithm');

program
  .option('-d, --dir <dir>', 'Solution directory', '.')
  .option('-o, --outdir <dir>', 'Output directory', '.')
  .parse();

const options = program.opts();

const solutionDir = path.join(process.cwd(), options.dir);

const outDir = path.join(process.cwd(), options.outdir);

async function main() {
  await generateREADME(solutionDir, outDir);
}

main()
  .then(() => {
    console.log('🚀  Finished! Check out your README.md');
  })
  .catch((error) => {
    console.error(error);
  });
