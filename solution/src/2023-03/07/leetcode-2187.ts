/**
 * 2187. Minimum Time to Complete Trips
 * https://leetcode.com/problems/minimum-time-to-complete-trips
 */
export function minimumTime(time: number[], totalTrips: number): number {
  const getCurrentTotalTrips = (t: number) => {
    return time.reduce((prev, curr) => prev + Math.floor(t / curr), 0);
  };

  const minTime = time.reduce((prev, curr) => Math.min(prev, curr), Number.MAX_SAFE_INTEGER);

  let [start, end] = [0, totalTrips * minTime];
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    const currentTrips = getCurrentTotalTrips(mid);
    if (currentTrips < totalTrips) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return end;
}
