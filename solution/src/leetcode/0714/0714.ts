/**
 * 714. Best Time to Buy and Sell Stock with Transaction Fee
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee
 */
export function maxProfit(prices: number[], fee: number): number {
  const n = prices.length;
  let [cash, hold] = [0, -prices[0]];
  for (let i = 1; i < n; i++) {
    cash = Math.max(cash, hold + prices[i] - fee);
    hold = Math.max(hold, cash - prices[i]);
  }
  return cash;
}
