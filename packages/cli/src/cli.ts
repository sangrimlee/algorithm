#!/usr/bin/env node
import { Command } from 'commander';

import { page } from '@/commands/page';
import { readme } from '@/commands/readme';
import { solution } from '@/commands/solution';
import packageJson from '../package.json';

function main() {
  const program = new Command()
    .name('algorithm')
    .description(packageJson.version)
    .version(packageJson.version, '-v, --version');

  program.addCommand(solution).addCommand(readme).addCommand(page);
  program.parse();
}

main();
