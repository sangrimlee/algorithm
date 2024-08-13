/**
 * 3248. Snake in Matrix
 * https://leetcode.com/problems/snake-in-matrix
 */
export function finalPositionOfSnake(n: number, commands: string[]): number {
  let [y, x] = [0, 0];
  for (const command of commands) {
    if (command === 'UP') {
      y -= 1;
    } else if (command === 'DOWN') {
      y += 1;
    } else if (command === 'LEFT') {
      x -= 1;
    } else {
      x += 1;
    }
  }
  return n * y + x;
}
