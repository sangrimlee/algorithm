/**
 * 2144. Minimum Cost of Buying Candies With Discount
 * https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount
 */
export function minimumCost(cost: number[]): number {
  const n = cost.length;
  cost.sort((a, b) => b - a);

  let answer = 0;
  for (let i = 0; i < n; i++) {
    if (i === 0 || (i + 1) % 3 !== 0) {
      answer += cost[i];
    }
  }
  return answer;
}
