/**
 * 2651. Calculate Delayed Arrival Time
 * https://leetcode.com/problems/calculate-delayed-arrival-time
 */
export function findDelayedArrivalTime(arrivalTime: number, delayedTime: number): number {
  return (arrivalTime + delayedTime) % 24;
}
