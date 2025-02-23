/**
 * 2724. Sort By
 * https://leetcode.com/problems/sort-by
 */
export function sortBy<T>(arr: T[], fn: (value: T) => number): T[] {
  return [...arr].sort((a, b) => fn(a) - fn(b));
}
