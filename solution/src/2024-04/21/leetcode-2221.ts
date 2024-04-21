/**
 * 2221. Find Triangular Sum of an Array
 * https://leetcode.com/problems/find-triangular-sum-of-an-array
 */
export function triangularSum(nums: number[]): number {
  while (1 < nums.length) {
    for (let i = 0; i < nums.length; i++) {
      nums[i] = (nums[i] + nums[i + 1]) % 10;
    }
    nums.pop();
  }
  return nums[0];
}
