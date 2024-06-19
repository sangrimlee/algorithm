/**
 * 1482. Minimum Number of Days to Make m Bouquets
 * https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets
 */
export function minDays(bloomDay: number[], m: number, k: number): number {
  if (bloomDay.length < m * k) {
    return -1;
  }

  const maxBloomDay = bloomDay.reduce((prev, day) => Math.max(prev, day), 1);
  let [left, right] = [1, maxBloomDay];
  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    let [flowers, bouquets] = [0, 0];
    for (const day of bloomDay) {
      flowers = mid < day ? 0 : flowers + 1;
      if (k <= flowers) {
        flowers = 0;
        bouquets += 1;
      }
    }
    if (m <= bouquets) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
