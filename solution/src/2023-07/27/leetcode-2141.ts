/**
 * 2141. Maximum Running Time of N Computers
 * https://leetcode.com/problems/maximum-running-time-of-n-computers
 */
export function maxRunTime(n: number, batteries: number[]): number {
  const batteryAverage = Math.floor(batteries.reduce((acc, battery) => acc + battery, 0) / n);
  let [left, right] = [1, batteryAverage];

  while (left < right) {
    const target = right - Math.floor((right - left) / 2);

    const extraBattery = batteries.reduce((prev, battery) => prev + Math.min(battery, target), 0);
    if (target <= Math.floor(extraBattery / n)) {
      left = target;
    } else {
      right = target - 1;
    }
  }
  return left;
}
