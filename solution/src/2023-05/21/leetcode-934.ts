import { range } from '@algorithm/lib';

/**
 * 934. Shortest Bridge
 * https://leetcode.com/problems/shortest-bridge
 */
export function shortestBridge(grid: number[][]): number {
  const n = grid.length;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const findStartPoint = () => {
    for (const y of range(n)) {
      for (const x of range(n)) {
        if (grid[y][x] === 1) {
          return [y, x];
        }
      }
    }
    throw new Error("It couldn't find a land in grid.");
  };

  const checkGridValue = (y: number, x: number, value: number) =>
    0 <= y && y < n && 0 <= x && x < n && grid[y][x] === value;

  const [sy, sx] = findStartPoint();
  grid[sy][sx] = -1;

  let queue = [[sy, sx]];
  let secondQueue = [[sy, sx]];
  while (0 < queue.length) {
    const nextQueue: number[][] = [];
    for (const [y, x] of queue) {
      for (const [dy, dx] of directions) {
        const [ny, nx] = [y + dy, x + dx];
        if (checkGridValue(ny, nx, 1)) {
          nextQueue.push([ny, nx]);
          secondQueue.push([ny, nx]);
          grid[ny][nx] = -1;
        }
      }
    }
    queue = nextQueue;
  }

  let distance = 0;
  while (0 < secondQueue.length) {
    const nextSecondQueue: number[][] = [];
    for (const [y, x] of secondQueue) {
      for (const [dy, dx] of directions) {
        const [ny, nx] = [y + dy, x + dx];
        if (checkGridValue(ny, nx, 1)) {
          return distance;
        }
        if (checkGridValue(ny, nx, 0)) {
          nextSecondQueue.push([ny, nx]);
          grid[ny][nx] = -1;
        }
      }
    }
    secondQueue = nextSecondQueue;
    distance += 1;
  }

  throw new Error('The correct answer does not exist.');
}
