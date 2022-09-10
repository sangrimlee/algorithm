/**
 * 122. Best Time to Buy and Sell Stock II
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 */
export function maxProfitII(prices: number[]): number {
  let answer = 0;
  const stack: number[] = [];
  for (const price of prices) {
    const minPrice = stack.pop();
    if (minPrice !== undefined && minPrice < price) {
      answer += price - minPrice;
    }
    stack.push(price);
  }
  return answer;
}
