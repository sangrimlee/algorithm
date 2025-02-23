/**
 * 542. 01 Matrix
 * https://leetcode.com/problems/01-matrix
 */
export function updateMatrix(mat: number[][]): number[][] {
  const [m, n] = [mat.length, mat[0].length];

  let queue: number[][] = [];

  mat.forEach((row, y) => {
    row.forEach((num, x) => {
      if (num === 0) {
        queue.push([y, x]);
      } else {
        mat[y][x] = -1;
      }
    });
  });

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let distance = 1;
  while (0 < queue.length) {
    const nextQueue: number[][] = [];
    for (const [y, x] of queue) {
      for (const [dy, dx] of directions) {
        const [ny, nx] = [y + dy, x + dx];
        if (0 <= ny && ny < m && 0 <= nx && nx < n && mat[ny][nx] === -1) {
          mat[ny][nx] = distance;
          nextQueue.push([ny, nx]);
        }
      }
    }
    queue = nextQueue;
    distance += 1;
  }

  return mat;
}
