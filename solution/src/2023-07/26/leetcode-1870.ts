/**
 * 1870. Minimum Speed to Arrive on Time
 * https://leetcode.com/problems/minimum-speed-to-arrive-on-time
 */
export function minSpeedOnTime(dist: number[], hour: number): number {
  const timeRequired = (speed: number) => {
    return dist.reduce((t, d, i) => {
      if (i === dist.length - 1) {
        return t + d / speed;
      }
      return t + Math.ceil(d / speed);
    }, 0);
  };

  let left = 0;
  let right = 10 ** 7;
  let minSpeed = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (timeRequired(mid) <= hour) {
      minSpeed = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return minSpeed;
}
