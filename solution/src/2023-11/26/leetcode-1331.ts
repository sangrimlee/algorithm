/**
 * 1331. Rank Transform of an Array
 * https://leetcode.com/problems/rank-transform-of-an-array
 */
export function arrayRankTransform(arr: number[]): number[] {
  const ranks = new Map([...new Set(arr)].sort((a, b) => a - b).map((num, i) => [num, i + 1]));

  return arr.map((num) => ranks.get(num) ?? 0);
}
