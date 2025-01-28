/**
 * 2658. Maximum Number of Fish in a Grid
 * https://leetcode.com/problems/maximum-number-of-fish-in-a-grid
 */
export function findMaxFish(grid: number[][]): number {
  const [m, n] = [grid.length, grid[0].length];
  let answer = 0;
  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (0 < grid[y][x]) {
        answer = Math.max(answer, findFish(grid, y, x));
      }
    }
  }
  return answer;
}

function findFish(grid: number[][], y: number, x: number) {
  const [m, n] = [grid.length, grid[0].length];
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let fish = grid[y][x];
  let queue: [number, number][] = [[y, x]];
  grid[y][x] = 0;
  while (0 < queue.length) {
    const nextQueue: [number, number][] = [];
    for (const [cy, cx] of queue) {
      for (const [dy, dx] of dirs) {
        const [ny, nx] = [cy + dy, cx + dx];
        if (0 <= ny && ny < m && 0 <= nx && nx < n && 0 < grid[ny][nx]) {
          fish += grid[ny][nx];
          grid[ny][nx] = 0;
          nextQueue.push([ny, nx]);
        }
      }
      queue = nextQueue;
    }
  }
  return fish;
}
