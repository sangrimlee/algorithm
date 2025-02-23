/**
 * 506. Relative Ranks
 * https://leetcode.com/problems/relative-ranks
 */
export function findRelativeRanks(score: number[]): string[] {
  const n = score.length;
  const medal = ['Gold Medal', 'Silver Medal', 'Bronze Medal'];
  const getRelativeRank = (rank: number) => {
    return rank < 3 ? medal[rank] : (rank + 1).toString();
  };
  const relativeRanks = new Array<string>(n).fill('');
  const ranks = new Array<number>(n)
    .fill(0)
    .map((_, i) => i)
    .sort((a, b) => score[b] - score[a]);
  ranks.forEach((i, rank) => (relativeRanks[i] = getRelativeRank(rank)));

  return relativeRanks;
}
