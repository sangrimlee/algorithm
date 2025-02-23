/**
 * 1894. Find the Student that Will Replace the Chalk
 * https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk
 */
export function chalkReplacer(chalk: number[], k: number): number {
  const n = chalk.length;
  const totalChalk = chalk.reduce((acc, c) => acc + c, 0);

  let remainChalk = k % totalChalk;
  for (let i = 0; i < n; i++) {
    if (remainChalk < chalk[i]) {
      return i;
    }
    remainChalk -= chalk[i];
  }
  return 0;
}
