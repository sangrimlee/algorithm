/**
 * 1503. Last Moment Before All Ants Fall Out of a Plank
 * https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank
 */
export function getLastMoment(n: number, left: number[], right: number[]): number {
  let result = 0;
  for (const i of left) {
    result = Math.max(result, i);
  }
  for (const i of right) {
    result = Math.max(result, n - i);
  }
  return result;
}
