/**
 * 1368. Minimum Cost to Make at Least One Valid Path in a Grid
 * https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid
 */
export function minCost(grid: number[][]): number {
  const INF = Number.MAX_SAFE_INTEGER;
  const [m, n] = [grid.length, grid[0].length];
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const minCost: number[][] = Array.from({ length: m }, () => Array(n).fill(INF));

  function dfs(y: number, x: number, cost: number, queue: [number, number][]) {
    if (y < 0 || m <= y || x < 0 || n <= x || minCost[y][x] !== INF) {
      return;
    }
    minCost[y][x] = cost;
    queue.push([y, x]);
    const [dy, dx] = directions[grid[y][x] - 1];
    dfs(y + dy, x + dx, cost, queue);
  }

  let cost = 0;
  let queue: [number, number][] = [[0, 0]];
  dfs(0, 0, cost, queue);
  while (0 < queue.length) {
    cost += 1;
    const nextQueue: [number, number][] = [];
    for (const [y, x] of queue) {
      for (const [dy, dx] of directions) {
        dfs(y + dy, x + dx, cost, nextQueue);
      }
    }
    queue = nextQueue;
  }
  return minCost[m - 1][n - 1];
}
