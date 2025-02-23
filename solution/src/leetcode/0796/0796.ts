/**
 * 796. Rotate String
 * https://leetcode.com/problems/rotate-string
 */
export function rotateString(s: string, goal: string): boolean {
  return s.length === goal.length && s.repeat(2).includes(goal);
}
