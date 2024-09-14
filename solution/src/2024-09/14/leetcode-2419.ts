/**
 * 2419. Longest Subarray With Maximum Bitwise AND
 * https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and
 */
export function longestSubarray(nums: number[]): number {
  let answer = 0;
  let maxValue = 0;
  let maxLength = 0;

  for (const num of nums) {
    if (maxValue < num) {
      maxValue = num;
      maxLength = 1;
      answer = maxLength;
    } else if (maxValue === num) {
      maxLength += 1;
    } else {
      maxLength = 0;
    }
    answer = Math.max(answer, maxLength);
  }
  return answer;
}
