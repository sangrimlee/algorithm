import { Heap } from '@algorithm/lib';

/**
 * 407. Trapping Rain Water II
 * https://leetcode.com/problems/trapping-rain-water-ii
 */
export function trapRainWater(heightMap: number[][]): number {
  const [m, n] = [heightMap.length, heightMap[0].length];
  if (m < 3 || n < 3) {
    return 0;
  }

  const directions = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];

  const heap = new Heap<number[]>(([a], [b]) => a - b);
  for (const [y, x] of getBorderPoints(m, n)) {
    heap.push([heightMap[y][x], y, x]);
    heightMap[y][x] = -1;
  }

  let answer = 0;
  let currentHeight = 0;
  while (!heap.isEmpty) {
    const peek = heap.pop();
    if (peek === undefined) break;
    const [height, y, x] = peek;
    currentHeight = Math.max(currentHeight, height);

    for (const [dy, dx] of directions) {
      const [ny, nx] = [y + dy, x + dx];
      if (0 <= ny && ny < m && 0 <= nx && nx < n && heightMap[ny][nx] !== -1) {
        heap.push([heightMap[ny][nx], ny, nx]);
        if (heightMap[ny][nx] < currentHeight) {
          answer += currentHeight - heightMap[ny][nx];
        }
        heightMap[ny][nx] = -1;
      }
    }
  }
  return answer;
}

function* getBorderPoints(m: number, n: number): Generator<[number, number]> {
  for (let y = 0; y < m; y++) {
    yield [y, 0];
    yield [y, n - 1];
  }
  for (let x = 1; x < n - 1; x++) {
    yield [0, x];
    yield [m - 1, x];
  }
}
