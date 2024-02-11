/**
 * 1463. Cherry Pickup II
 * https://leetcode.com/problems/cherry-pickup-ii
 */
export function cherryPickup(grid: number[][]): number {
  const [m, n] = [grid.length, grid[0].length];
  const memo = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => new Array<number>(n).fill(-1)),
  );

  function dfs(r: number, c1: number, c2: number): number {
    if (r === m) {
      return 0;
    }

    if (memo[r][c1][c2] !== -1) {
      return memo[r][c1][c2];
    }

    const cherries = c1 === c2 ? grid[r][c1] : grid[r][c1] + grid[r][c2];
    let result = 0;
    for (let nc1 = c1 - 1; nc1 <= c1 + 1; nc1++) {
      for (let nc2 = c2 - 1; nc2 <= c2 + 1; nc2++) {
        if (nc1 >= 0 && nc1 < n && nc2 >= 0 && nc2 < n) {
          result = Math.max(result, dfs(r + 1, nc1, nc2));
        }
      }
    }

    memo[r][c1][c2] = cherries + result;
    return memo[r][c1][c2];
  }

  return dfs(0, 0, n - 1);
}
