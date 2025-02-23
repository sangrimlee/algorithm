/**
 * 1475. Final Prices With a Special Discount in a Shop
 * https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop
 */
export function finalPrices(prices: number[]): number[] {
  const answer = [...prices];
  const stack: number[] = [];
  prices.forEach((price, i) => {
    while (0 < stack.length && price <= prices[stack[stack.length - 1]]) {
      const prevIndex = stack.pop();
      if (prevIndex !== undefined) {
        answer[prevIndex] -= price;
      }
    }
    stack.push(i);
  });

  return answer;
}
