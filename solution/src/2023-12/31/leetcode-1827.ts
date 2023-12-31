/**
 * 1827. Minimum Operations to Make the Array Increasing
 * https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing
 */
export function minOperations(nums: number[]): number {
  const n = nums.length;
  let answer = 0;
  for (let i = 1; i < n; i++) {
    if (nums[i - 1] < nums[i]) {
      continue;
    }
    answer += nums[i - 1] - nums[i] + 1;
    nums[i] = nums[i - 1] + 1;
  }
  return answer;
}
