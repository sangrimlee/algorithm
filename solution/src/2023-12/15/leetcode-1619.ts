/**
 * 1619. Mean of Array After Removing Some Elements
 * https://leetcode.com/problems/mean-of-array-after-removing-some-elements
 */
export function trimMean(arr: number[]): number {
  arr.sort((a, b) => a - b);
  const trimSize = arr.length / 20;
  const sum = arr.slice(trimSize, -trimSize).reduce((acc, num) => acc + num, 0);
  return sum / (trimSize * 18);
}
