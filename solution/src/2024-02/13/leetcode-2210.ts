/**
 * 2210. Count Hills and Valleys in an Array
 * https://leetcode.com/problems/count-hills-and-valleys-in-an-array
 */
export function countHillValley(nums: number[]): number {
  const n = nums.length;

  let answer = 0;
  let left = nums[0];
  for (let i = 1; i < n - 1; i++) {
    if ((left < nums[i] && nums[i] > nums[i + 1]) || (left > nums[i] && nums[i] < nums[i + 1])) {
      left = nums[i];
      answer += 1;
    }
  }
  return answer;
}
