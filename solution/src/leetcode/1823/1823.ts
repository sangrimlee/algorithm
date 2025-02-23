/**
 * 1823. Find the Winner of the Circular Game
 * https://leetcode.com/problems/find-the-winner-of-the-circular-game
 */
export function findTheWinner(n: number, k: number): number {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer = (answer + k) % i;
  }
  return answer + 1;
}
