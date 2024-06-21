/**
 * 1052. Grumpy Bookstore Owner
 * https://leetcode.com/problems/grumpy-bookstore-owner
 */
export function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
  const n = customers.length;
  let alreadySatisfied = 0;
  for (let i = 0; i < n; i++) {
    if (grumpy[i] === 0) {
      alreadySatisfied += customers[i];
      customers[i] = 0;
    }
  }

  let maxSatisfied = 0;
  let currentSatisfied = 0;
  for (let i = 0; i < n; i++) {
    currentSatisfied += customers[i];
    if (minutes <= i) {
      currentSatisfied -= customers[i - minutes];
    }
    maxSatisfied = Math.max(maxSatisfied, currentSatisfied);
  }
  return alreadySatisfied + maxSatisfied;
}
