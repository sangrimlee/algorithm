/**
 * 1219. Path with Maximum Gold
 * https://leetcode.com/problems/path-with-maximum-gold
 */
export function getMaximumGold(grid: number[][]): number {
  const [m, n] = [grid.length, grid[0].length];
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  function dfs(y: number, x: number) {
    if (y < 0 || m <= y || x < 0 || n <= x || grid[y][x] === 0) {
      return 0;
    }

    const gold = grid[y][x];
    grid[y][x] = 0;
    let maxGold = 0;
    for (const [dy, dx] of directions) {
      maxGold = Math.max(maxGold, dfs(y + dy, x + dx));
    }
    grid[y][x] = gold;
    return maxGold + gold;
  }

  let answer = 0;
  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      answer = Math.max(answer, dfs(y, x));
    }
  }
  return answer;
}
