/**
 * 3375. Minimum Operations to Make Array Values Equal to K
 * https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k
 */
export function minOperations(nums: number[], k: number): number {
  if (nums.some((num) => num < k)) {
    return -1;
  }
  const set = new Set(nums);
  set.add(k);
  return set.size - 1;
}
