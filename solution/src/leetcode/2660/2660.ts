/**
 * 2660. Determine the Winner of a Bowling Game
 * https://leetcode.com/problems/determine-the-winner-of-a-bowling-game
 */
export function isWinner(player1: number[], player2: number[]): number {
  function caculateScore(player: number[]) {
    let score = 0;
    player.forEach((hit, i) => {
      const isDouble = player[i - 1] === 10 || player[i - 2] === 10;
      score += isDouble ? 2 * hit : hit;
    });
    return score;
  }

  const score1 = caculateScore(player1);
  const score2 = caculateScore(player2);
  return score1 === score2 ? 0 : score1 > score2 ? 1 : 2;
}
