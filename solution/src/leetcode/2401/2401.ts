/**
 * 2401. Longest Nice Subarray
 * https://leetcode.com/problems/longest-nice-subarray
 */
export function longestNiceSubarray(nums: number[]): number {
  const n = nums.length;

  let start = 0;
  let usedBits = 0;
  let maxLength = 1;
  for (let end = 0; end < n; end++) {
    while ((usedBits & nums[end]) !== 0) {
      usedBits ^= nums[start];
      start += 1;
    }
    usedBits |= nums[start];
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}
