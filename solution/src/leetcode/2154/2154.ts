/**
 * 2154. Keep Multiplying Found Values by Two
 * https://leetcode.com/problems/keep-multiplying-found-values-by-two
 */
export function findFinalValue(nums: number[], original: number): number {
  const set = new Set(nums);
  let num = original;
  while (set.has(num)) {
    num *= 2;
  }
  return num;
}
