import chalk from 'chalk';

export const logger = {
  error(...args: unknown[]) {
    console.log(chalk.red.bold(...args));
  },
  warn(...args: unknown[]) {
    console.log(chalk.yellow(...args));
  },
  info(...args: unknown[]) {
    console.log(chalk.blue(...args));
  },
  success(...args: unknown[]) {
    console.log(chalk.green(...args));
  },
  log(...args: unknown[]) {
    console.log(chalk.gray(...args));
  },
  break() {
    console.log('');
  },
};
