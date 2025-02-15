/**
 * 188. Best Time to Buy and Sell Stock IV
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/
 */
export function maxProfitIV(k: number, prices: number[]): number {
  const n = prices.length;
  if (n === 0) return 0;

  const dp = new Array<number>(k + 1).fill(0);
  const minPrices = new Array<number>(k + 1).fill(prices[0]);

  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= k; j++) {
      minPrices[j] = Math.min(minPrices[j], prices[i] - dp[j - 1]);
      dp[j] = Math.max(dp[j], prices[i] - minPrices[j]);
    }
  }

  return dp[k];
}
