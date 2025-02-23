/**
 * 598. Range Addition II
 * https://leetcode.com/problems/range-addition-ii
 */
export function maxCount(m: number, n: number, ops: number[][]): number {
  return ops
    .reduce(([a1, b1], [a2, b2]) => [Math.min(a1, a2), Math.min(b1, b2)], [m, n])
    .reduce((acc, curr) => acc * curr, 1);
}
