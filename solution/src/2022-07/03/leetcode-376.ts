/**
 * 376. Wiggle Subsequence
 * https://leetcode.com/problems/wiggle-subsequence/
 */
export function wiggleMaxLength(nums: number[]): number {
  if (nums.length < 2) {
    return nums.length;
  }

  let answer = 1;
  let direction: -1 | 0 | 1 = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    const diff = nums[i + 1] - nums[i];
    if (diff < 0 && direction <= 0) {
      direction = 1;
      answer += 1;
    }
    if (0 < diff && 0 <= direction) {
      direction = -1;
      answer += 1;
    }
  }

  return answer;
}
