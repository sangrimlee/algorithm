/**
 * 885. Spiral Matrix III
 * https://leetcode.com/problems/spiral-matrix-iii
 */
export function spiralMatrixIII(
  rows: number,
  cols: number,
  rStart: number,
  cStart: number,
): number[][] {
  const answer: number[][] = [];
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let direction = 0;
  let spiralSize = 0;
  let [cy, cx] = [rStart, cStart];
  while (answer.length < rows * cols) {
    const [dy, dx] = directions[direction];
    const sideSize = Math.floor(spiralSize / 2) + 1;
    for (let i = 0; i < sideSize; i++) {
      if (0 <= cy && cy < rows && 0 <= cx && cx < cols) {
        answer.push([cy, cx]);
      }
      [cy, cx] = [cy + dy, cx + dx];
    }
    spiralSize += 1;
    direction = (direction + 1) % 4;
  }
  return answer;
}
