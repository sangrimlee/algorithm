/**
 * 64. Minimum Path Sum
 * https://leetcode.com/problems/minimum-path-sum
 */
export function minPathSum(grid: number[][]): number {
  const [N, M] = [grid.length, grid[0].length];
  const memo: number[][] = Array.from({ length: N }, () => new Array<number>(M).fill(-1));

  const dp = (y: number, x: number) => {
    if (y === 0 && x === 0) {
      return grid[y][x];
    }
    if (y < 0 || x < 0) {
      return Number.MAX_SAFE_INTEGER;
    }
    if (memo[y][x] !== -1) {
      return memo[y][x];
    }
    memo[y][x] = Math.min(dp(y - 1, x), dp(y, x - 1)) + grid[y][x];
    return memo[y][x];
  };

  return dp(N - 1, M - 1);
}
