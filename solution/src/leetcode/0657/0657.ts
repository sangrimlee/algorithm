/**
 * 657. Robot Return to Origin
 * https://leetcode.com/problems/robot-return-to-origin
 */
export function judgeCircle(moves: string): boolean {
  let [y, x] = [0, 0];
  for (const move of moves) {
    if (move === 'U') {
      y -= 1;
    } else if (move === 'D') {
      y += 1;
    } else if (move === 'R') {
      x += 1;
    } else {
      x -= 1;
    }
  }
  return y === 0 && x === 0;
}
