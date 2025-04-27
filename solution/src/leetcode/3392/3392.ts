/**
 * 3392. Count Subarrays of Length Three With a Condition
 * https://leetcode.com/problems/count-subarrays-of-length-three-with-a-condition
 */
export function countSubarrays(nums: number[]): number {
  const n = nums.length;

  let answer = 0;
  for (let i = 0; i < n - 2; i++) {
    if (2 * (nums[i] + nums[i + 2]) === nums[i + 1]) {
      answer += 1;
    }
  }
  return answer;
}
