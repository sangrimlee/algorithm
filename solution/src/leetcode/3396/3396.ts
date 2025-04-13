/**
 * 3396. Minimum Number of Operations to Make Elements in Array Distinct
 * https://leetcode.com/problems/minimum-number-of-operations-to-make-elements-in-array-distinct
 */
export function minimumOperations(nums: number[]): number {
  const n = nums.length;
  const set = new Set<number>();
  for (let i = n - 1; i >= 0; i--) {
    if (set.has(nums[i])) {
      return Math.floor(i / 3) + 1;
    }
    set.add(nums[i]);
  }
  return 0;
}
