/**
 * 2706. Buy Two Chocolates
 * https://leetcode.com/problems/buy-two-chocolates
 */
export function buyChoco(prices: number[], money: number): number {
  let [min1, min2] = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
  prices.forEach((price) => {
    if (price < min1) {
      [min1, min2] = [price, min1];
    } else if (price < min2) {
      min2 = price;
    }
  });

  const answer = money - (min1 + min2);
  return 0 <= answer ? answer : money;
}
