/**
 * 2483. Minimum Penalty for a Shop
 * https://leetcode.com/problems/minimum-penalty-for-a-shop
 */
export function bestClosingTime(customers: string): number {
  const n = customers.length;

  let minPenalty = 0;
  let currentPenalty = 0;
  let earliestTime = 0;
  for (let i = 0; i < n; i++) {
    currentPenalty += customers[i] === 'N' ? 1 : -1;
    if (currentPenalty < minPenalty) {
      minPenalty = currentPenalty;
      earliestTime = i + 1;
    }
  }

  return earliestTime;
}
