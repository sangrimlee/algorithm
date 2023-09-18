/**
 * 1337. The K Weakest Rows in a Matrix
 * https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix
 */
export function kWeakestRows(mat: number[][], k: number): number[] {
  return mat
    .map((row, i) => [row.reduce((acc, curr) => acc + curr, 0), i])
    .sort(([a], [b]) => a - b)
    .slice(0, k)
    .map(([, i]) => i);
}
