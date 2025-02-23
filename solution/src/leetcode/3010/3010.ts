/**
 * 3010. Divide an Array Into Subarrays With Minimum Cost I
 * https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i
 */
export function minimumCost(nums: number[]): number {
  let first = Number.MAX_SAFE_INTEGER;
  let second = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < first) {
      [first, second] = [nums[i], first];
    } else if (nums[i] < second) {
      second = nums[i];
    }
  }
  return nums[0] + first + second;
}
