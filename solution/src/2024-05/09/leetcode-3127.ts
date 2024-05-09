/**
 * 3127. Make a Square with the Same Color
 * https://leetcode.com/problems/make-a-square-with-the-same-color
 */
export function canMakeSquare(grid: string[][]): boolean {
  const n = 3;
  for (let y = 0; y < n - 1; y++) {
    for (let x = 0; x < n - 1; x++) {
      if (isPossible(grid, y, x)) {
        return true;
      }
    }
  }
  return false;
}

function isPossible(grid: string[][], i: number, j: number) {
  let [white, black] = [0, 0];
  for (let y = i; y < i + 2; y++) {
    for (let x = j; x < j + 2; x++) {
      if (grid[y][x] === 'W') {
        white += 1;
      } else {
        black += 1;
      }
    }
  }
  return 3 <= white || 3 <= black;
}
