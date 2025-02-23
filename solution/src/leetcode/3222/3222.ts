/**
 * 3222. Find the Winning Player in Coin Game
 * https://leetcode.com/problems/find-the-winning-player-in-coin-game
 */
export function losingPlayer(x: number, y: number): string {
  const turn = Math.min(x, Math.floor(y / 4));
  return turn % 2 === 1 ? 'Alice' : 'Bob';
}
