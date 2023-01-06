/**
 * 1833. Maximum Ice Cream Bars
 * https://leetcode.com/problems/maximum-ice-cream-bars
 */
export function maxIceCream(costs: number[], coins: number): number {
  const maxCost = costs.reduce((maxCost, cost) => Math.max(maxCost, cost), 0);
  const costsFrequency = new Array<number>(maxCost + 1).fill(0);
  for (const cost of costs) {
    costsFrequency[cost] += 1;
  }

  let [iceCreamCount, cost] = [0, 1];
  while (cost <= maxCost && cost <= coins) {
    if (0 < costsFrequency[cost]) {
      const count = Math.min(costsFrequency[cost], Math.floor(coins / cost));
      coins -= cost * count;
      iceCreamCount += count;
    }
    cost += 1;
  }

  return iceCreamCount;
}
