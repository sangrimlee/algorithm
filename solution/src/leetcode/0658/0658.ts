/**
 * 658. Find K Closest Elements
 * https://leetcode.com/problems/find-k-closest-elements/
 */
export function findClosestElements(arr: number[], k: number, x: number): number[] {
  if (arr.length === k) {
    return arr;
  }
  return arr
    .sort((a, b) => Math.abs(a - x) - Math.abs(b - x))
    .slice(0, k)
    .sort((a, b) => a - b);
}
