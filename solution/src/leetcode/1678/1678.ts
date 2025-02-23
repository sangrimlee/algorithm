/**
 * 1678. Goal Parser Interpretation
 * https://leetcode.com/problems/goal-parser-interpretation
 */
export function interpret(command: string): string {
  return command.replace(/\(\)/g, 'o').replace(/\(al\)/g, 'al');
}
