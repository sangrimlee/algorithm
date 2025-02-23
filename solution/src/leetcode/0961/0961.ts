/**
 * 961. N-Repeated Element in Size 2N Array
 * https://leetcode.com/problems/n-repeated-element-in-size-2n-array
 */
export function repeatedNTimes(nums: number[]): number {
  const set = new Set<number>();
  for (const num of nums) {
    if (set.has(num)) {
      return num;
    }
    set.add(num);
  }
  throw new Error('There is no repeated element.');
}
