/**
 * 3396. Minimum Number of Operations to Make Elements in Array Distinct
 * https://leetcode.com/problems/minimum-number-of-operations-to-make-elements-in-array-distinct
 */
export function minimumOperations(nums: number[]): number {
  const lastDuplicate = findLastDuplicate(nums);
  return Math.ceil((lastDuplicate + 1) / 3);
}

function findLastDuplicate(nums: number[]) {
  const set = new Set<number>();
  for (let i = nums.length; 0 <= i; i--) {
    if (set.has(nums[i])) {
      return i;
    }
    set.add(nums[i]);
  }
  return -1;
}
