/**
 * 123. Best Time to Buy and Sell Stock III
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/
 */
export function maxProfitIII(prices: number[]): number {
  const n = prices.length;
  if (n === 0) return 0;
  const dp = new Array<number>(3).fill(0);
  const minPrices = new Array<number>(3).fill(prices[0]);
  for (let i = 1; i < n; i++) {
    for (let k = 1; k <= 2; k++) {
      minPrices[k] = Math.min(minPrices[k], prices[i] - dp[k - 1]);
      dp[k] = Math.max(dp[k], prices[i] - minPrices[k]);
    }
  }

  return dp[2];
}
