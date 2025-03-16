/**
 * 2594. Minimum Time to Repair Cars
 * https://leetcode.com/problems/minimum-time-to-repair-cars
 */
export function repairCars(ranks: number[], cars: number): number {
  function canRepairCars(time: number): boolean {
    let repairedCars = 0;
    for (const rank of ranks) {
      repairedCars += Math.floor(Math.sqrt(time / rank));
      if (repairedCars >= cars) {
        return true;
      }
    }
    return false;
  }

  let left = 0;
  let right = ranks[0] * cars ** 2;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (canRepairCars(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
