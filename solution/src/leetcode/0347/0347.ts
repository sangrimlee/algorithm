/**
 * 347. Top K Frequent Elements
 * https://leetcode.com/problems/top-k-frequent-elements
 */
export function topKFrequent(nums: number[], k: number): number[] {
  const counter = new Map<number, number>();

  const getCount = (num: number) => counter.get(num) ?? 0;
  const sortByFreq = (a: number, b: number) => getCount(b) - getCount(a);

  for (const num of nums) {
    counter.set(num, getCount(num) + 1);
  }

  return [...counter.keys()].sort(sortByFreq).slice(0, k);
}
