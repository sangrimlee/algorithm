/**
 * 2485. Find the Pivot Integer
 * https://leetcode.com/problems/find-the-pivot-integer
 */
export function pivotInteger(n: number): number {
  const sum = (n * (n + 1)) / 2;
  const pivot = Math.sqrt(sum);
  if (pivot !== Math.floor(pivot)) {
    return -1;
  }
  return pivot;
}
