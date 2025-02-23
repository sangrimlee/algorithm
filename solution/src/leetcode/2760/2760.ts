/**
 * 2760. Longest Even Odd Subarray With Threshold
 * https://leetcode.com/problems/longest-even-odd-subarray-with-threshold
 */
export function longestAlternatingSubarray(nums: number[], threshold: number): number {
  let answer = 0;
  let currentLength = 0;
  nums.forEach((num, i) => {
    if (num <= threshold) {
      if (currentLength === 0 || nums[i - 1] % 2 === nums[i] % 2) {
        currentLength = num % 2 === 0 ? 1 : 0;
      } else {
        currentLength += 1;
      }
    } else {
      currentLength = 0;
    }
    answer = Math.max(answer, currentLength);
  });
  return answer;
}
