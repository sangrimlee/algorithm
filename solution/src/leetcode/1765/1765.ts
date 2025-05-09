/**
 * 1765. Map of Highest Peak
 * https://leetcode.com/problems/map-of-highest-peak
 */
export function highestPeak(isWater: number[][]): number[][] {
  const [m, n] = [isWater.length, isWater[0].length];
  const height: number[][] = Array.from({ length: m }, () => new Array<number>(n).fill(-1));
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let queue: [number, number][] = [];
  isWater.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell === 1) {
        queue.push([y, x]);
        height[y][x] = 0;
      }
    });
  });

  while (0 < queue.length) {
    const nextQueue: [number, number][] = [];
    for (const [y, x] of queue) {
      for (const [dy, dx] of directions) {
        const [ny, nx] = [y + dy, x + dx];
        if (0 <= ny && ny < m && 0 <= nx && nx < n && height[ny][nx] === -1) {
          height[ny][nx] = height[y][x] + 1;
          queue.push([ny, nx]);
        }
      }
    }
    queue = nextQueue;
  }

  return height;
}
