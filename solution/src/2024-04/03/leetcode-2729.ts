/**
 * 2729. Check if The Number is Fascinating
 * https://leetcode.com/problems/check-if-the-number-is-fascinating
 */
export function isFascinating(n: number): boolean {
  const c = concat(n, 2 * n, 3 * n);
  const set = new Set<string>(c);
  return c.length === 9 && set.size === 9 && !set.has('0');
}

function concat(...nums: number[]): string {
  return nums.join('');
}
