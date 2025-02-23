/**
 * 458. Poor Pigs
 * https://leetcode.com/problems/poor-pigs
 */
export function poorPigs(buckets: number, minutesToDie: number, minutesToTest: number): number {
  return Math.ceil(Math.log10(buckets) / Math.log10(minutesToTest / minutesToDie + 1));
}
