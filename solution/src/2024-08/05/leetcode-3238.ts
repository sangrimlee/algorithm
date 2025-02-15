/**
 * 3238. Find the Number of Winning Players
 * https://leetcode.com/problems/find-the-number-of-winning-players
 */
export function winningPlayerCount(n: number, pick: number[][]): number {
  const winPlayers = new Set<number>();
  const players: number[][] = Array.from({ length: n }, () => new Array<number>(11).fill(0));

  for (const [player, color] of pick) {
    players[player][color] += 1;
    if (player < players[player][color]) {
      winPlayers.add(player);
    }
  }
  return winPlayers.size;
}
