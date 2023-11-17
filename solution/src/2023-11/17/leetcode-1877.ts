/**
 * 1877. Minimize Maximum Pair Sum in Array
 * https://leetcode.com/problems/minimize-maximum-pair-sum-in-array
 */
export function minPairSum(nums: number[]): number {
  const n = nums.length;

  let answer = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n / 2; i++) {
    answer = Math.max(answer, nums[i] + nums[n - i - 1]);
  }
  return answer;
}
