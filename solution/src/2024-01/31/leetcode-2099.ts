/**
 * 2099. Find Subsequence of Length K With the Largest Sum
 * https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum
 */
export function maxSubsequence(nums: number[], k: number): number[] {
  return Array.from({ length: nums.length })
    .map((_, i) => i)
    .sort((a, b) => nums[b] - nums[a])
    .slice(0, k)
    .sort((a, b) => a - b)
    .map((i) => nums[i]);
}
