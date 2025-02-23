/**
 * 2364. Count Number of Bad Pairs
 * https://leetcode.com/problems/count-number-of-bad-pairs
 */
export function countBadPairs(nums: number[]): number {
  const n = nums.length;
  const totalPairs = (n * (n - 1)) / 2;
  const counter = new Map<number, number>();

  let validPairs = 0;
  for (let i = 0; i < n; i++) {
    const count = counter.get(i - nums[i]) ?? 0;
    counter.set(i - nums[i], count + 1);
    validPairs += count;
  }
  return totalPairs - validPairs;
}
