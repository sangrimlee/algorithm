/**
 * 1523. Count Odd Numbers in an Interval Range
 * https://leetcode.com/problems/count-odd-numbers-in-an-interval-range
 */
export function countOdds(low: number, high: number): number {
  if (low % 2 === 1 || high % 2 === 1) {
    return Math.ceil((high - low + 1) / 2);
  }
  return (high - low) / 2;
}
