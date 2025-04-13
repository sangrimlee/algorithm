/**
 * 3375. Minimum Operations to Make Array Values Equal to K
 * https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k
 */
export function minOperations(nums: number[], k: number): number {
  const set = new Set<number>();

  for (const num of nums) {
    if (num < k) {
      return -1;
    }
    if (k < num) {
      set.add(num);
    }
  }
  return set.size;
}
