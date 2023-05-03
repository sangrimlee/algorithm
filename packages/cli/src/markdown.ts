#!/usr/bin/env node

import path from 'node:path';
import { Command } from 'commander';

import { generateREADME } from './lib/generate';
import { generatePage } from './lib/generate/page';

const program = new Command('Markdown Generator for @algorithm');

program
  .option('-d, --dir <dir>', 'Solution directory', '.')
  .option('-o, --outdir <dir>', 'Output directory', '.')
  .option('--format <format>', 'Generate format ("README", "PAGE")', 'README')
  .parse();

const options = program.opts();

const solutionDir = path.join(process.cwd(), options.dir);
const outDir = path.join(process.cwd(), options.outdir);

function main() {
  if (/^readme$/i.test(options.format)) {
    return generateREADME(solutionDir, outDir);
  }

  if (/^page$/i.test(options.format)) {
    return generatePage(solutionDir, outDir);
  }

  return Promise.reject('format should be PAGE or README.');
}

main()
  .then(() => {
    console.log('🚀 Finished!');
  })
  .catch((error) => {
    console.error(error);
  });
