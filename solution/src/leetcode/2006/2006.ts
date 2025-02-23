/**
 * 2006. Count Number of Pairs With Absolute Difference K
 * https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k
 */
export function countKDifference(nums: number[], k: number): number {
  const n = nums.length;

  let answer = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (Math.abs(nums[i] - nums[j]) === k) {
        answer += 1;
      }
    }
  }
  return answer;
}
