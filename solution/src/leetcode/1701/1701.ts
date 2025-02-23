/**
 * 1701. Average Waiting Time
 * https://leetcode.com/problems/average-waiting-time
 */
export function averageWaitingTime(customers: number[][]): number {
  const n = customers.length;
  let currentTime = 0;
  let totalWaitingTime = 0;
  for (const [arrival, time] of customers) {
    currentTime = Math.max(currentTime, arrival) + time;
    totalWaitingTime += currentTime - arrival;
  }
  return totalWaitingTime / n;
}
