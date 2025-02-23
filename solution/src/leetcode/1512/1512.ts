/**
 * 1512. Number of Good Pairs
 * https://leetcode.com/problems/number-of-good-pairs
 */
export function numIdenticalPairs(nums: number[]): number {
  const counter = new Map<number, number>();
  for (const num of nums) {
    counter.set(num, (counter.get(num) ?? 0) + 1);
  }

  return [...counter.values()].reduce((prev, count) => prev + (count * (count - 1)) / 2, 0);
}
