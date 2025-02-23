/**
 * 2347. Best Poker Hand
 * https://leetcode.com/problems/best-poker-hand
 */
export function bestHand(ranks: number[], suits: string[]): string {
  if (suits.every((suit) => suit === suits[0])) {
    return 'Flush';
  }
  let maxRankCount = 0;
  const rankCounts = new Map<number, number>();
  ranks.forEach((rank) => {
    const rankCount = rankCounts.get(rank) ?? 0;
    rankCounts.set(rank, rankCount + 1);
    maxRankCount = Math.max(maxRankCount, rankCount + 1);
  });
  if (2 <= maxRankCount) {
    return 3 <= maxRankCount ? 'Three of a Kind' : 'Pair';
  }
  return 'High Card';
}
