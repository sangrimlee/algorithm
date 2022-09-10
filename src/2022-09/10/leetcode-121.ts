/**
 * 121. Best Time to Buy and Sell Stock
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */
export function maxProfitI(prices: number[]): number {
  let answer = 0;
  let minPrice = Number.MAX_SAFE_INTEGER;
  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else {
      answer = Math.max(answer, price - minPrice);
    }
  }
  return answer;
}
