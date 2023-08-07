/**
 * 724. Find Pivot Index
 * https://leetcode.com/problems/find-pivot-index
 */
export function pivotIndex(nums: number[]): number {
  const n = nums.length;
  const totalSum = nums.reduce((acc, num) => acc + num, 0);
  let leftSum = 0;
  for (let i = 0; i < n; i++) {
    if (leftSum === totalSum - leftSum - nums[i]) {
      return i;
    }
    leftSum += nums[i];
  }

  return -1;
}
