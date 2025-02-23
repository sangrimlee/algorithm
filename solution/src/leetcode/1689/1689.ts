/**
 * 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers
 * https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/
 */

export function minPartitions(n: string): number {
  return n.split('').reduce((prev, curr) => (prev < +curr ? +curr : prev), 0);
}
