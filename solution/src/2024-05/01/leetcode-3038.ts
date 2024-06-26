/**
 * 3038. Maximum Number of Operations With the Same Score I
 * https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i
 */
export function maxOperations(nums: number[]): number {
  const n = nums.length;
  const sum = nums[0] + nums[1];

  let answer = 1;
  for (let i = 2; i < n - 1; i += 2) {
    if (sum !== nums[i] + nums[i + 1]) {
      return answer;
    }
    answer += 1;
  }
  return answer;
}
