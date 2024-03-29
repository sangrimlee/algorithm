/**
 * 1481. Least Number of Unique Integers after K Removals
 * https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals
 */
export function findLeastNumOfUniqueInts(arr: number[], k: number): number {
  const counter = new Map<number, number>();
  for (const num of arr) {
    counter.set(num, (counter.get(num) ?? 0) + 1);
  }
  const counts = [...counter.values()].sort((a, b) => a - b);

  let remainRemovals = k;
  let remainNumber = counts.length;
  for (const count of counts) {
    remainRemovals -= count;
    if (remainRemovals < 0) {
      return remainNumber;
    }
    remainNumber -= 1;
  }
  return 0;
}
