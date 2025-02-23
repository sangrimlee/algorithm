/**
 * 1561. Maximum Number of Coins You Can Get
 * https://leetcode.com/problems/maximum-number-of-coins-you-can-get
 */
export function maxCoins(piles: number[]): number {
  piles.sort((a, b) => b - a);

  const n = (2 * piles.length) / 3;
  let answer = 0;
  for (let i = 1; i < n; i += 2) {
    answer += piles[i];
  }
  return answer;
}
