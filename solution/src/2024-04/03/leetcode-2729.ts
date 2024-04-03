/**
 * 2729. Check if The Number is Fascinating
 * https://leetcode.com/problems/check-if-the-number-is-fascinating
 */
export function isFascinating(n: number): boolean {
  const c = `${n}${2 * n}${3 * n}`;
  const set = new Set(c);
  return c.length === 9 && set.size === 9 && !set.has('0');
}
