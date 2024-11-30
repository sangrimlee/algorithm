import { Heap } from '@algorithm/lib';

/**
 * 2577. Minimum Time to Visit a Cell In a Grid
 * https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid
 */
export function minimumTime(grid: number[][]): number {
  if (1 < grid[0][1] && 1 < grid[1][0]) {
    return -1;
  }

  const [m, n] = [grid.length, grid[0].length];
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const visited: boolean[][] = Array.from({ length: m }, () => new Array(n).fill(false));
  const heap = new Heap<number[]>((a, b) => a[0] - b[0]);
  heap.push([0, 0, 0]);
  while (!heap.isEmpty) {
    const [time, y, x] = heap.pop()!;
    if (y === m - 1 && x === n - 1) {
      return time;
    }
    if (visited[y][x]) {
      continue;
    }
    visited[y][x] = true;
    for (const [dy, dx] of directions) {
      const [ny, nx] = [y + dy, x + dx];
      if (ny < 0 || m <= ny || nx < 0 || n <= nx || visited[ny][nx]) {
        continue;
      }
      const waitTime = (grid[ny][nx] - time) % 2 === 0 ? 1 : 0;
      const nextTime = Math.max(grid[ny][nx] + waitTime, time + 1);
      heap.push([nextTime, ny, nx]);
    }
  }
  return -1;
}
