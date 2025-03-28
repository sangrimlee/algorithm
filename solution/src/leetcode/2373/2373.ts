/**
 * 2373. Largest Local Values in a Matrix
 * https://leetcode.com/problems/largest-local-values-in-a-matrix
 */
export function largestLocal(grid: number[][]): number[][] {
  const n = grid.length;
  const answer = Array.from({ length: n - 2 }, () => Array<number>(n - 2).fill(0));
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          answer[i][j] = Math.max(answer[i][j], grid[k][l]);
        }
      }
    }
  }
  return answer;
}
