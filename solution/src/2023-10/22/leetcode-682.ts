/**
 * 682. Baseball Game
 * https://leetcode.com/problems/baseball-game
 */
export function calPoints(operations: string[]): number {
  const scores: number[] = [];
  for (const op of operations) {
    if (op === '+') {
      scores.push(scores[scores.length - 2] + scores[scores.length - 1]);
    } else if (op === 'D') {
      scores.push(scores[scores.length - 1] * 2);
    } else if (op === 'C') {
      scores.pop();
    } else {
      scores.push(parseInt(op));
    }
  }
  return scores.reduce((acc, score) => acc + score, 0);
}
