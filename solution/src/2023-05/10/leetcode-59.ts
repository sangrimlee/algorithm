/**
 * 59. Spiral Matrix II
 * https://leetcode.com/problems/spiral-matrix-ii
 */
export function generateMatrix(n: number): number[][] {
  const matrix = Array.from({ length: n }).map(() => new Array<number>(n).fill(0));

  const moves = [
    [0, 1] /* Left */,
    [1, 0] /* Down */,
    [0, -1] /* Right */,
    [-1, 0] /* Up */,
  ];

  let currentValue = 1;
  let [cy, cx, move] = [0, 0, 0];
  matrix[0][0] = 1;

  while (currentValue < n * n) {
    const [dy, dx] = moves[move];
    const [ny, nx] = [cy + dy, cx + dx];
    if (0 <= ny && ny < n && 0 <= nx && nx < n && matrix[ny][nx] === 0) {
      matrix[ny][nx] = ++currentValue;
      [cy, cx] = [ny, nx];
    } else {
      move = (move + 1) % 4;
    }
  }

  return matrix;
}
