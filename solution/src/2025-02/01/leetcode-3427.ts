/**
 * 3427. Sum of Variable Length Subarrays
 * https://leetcode.com/problems/sum-of-variable-length-subarrays
 */
export function subarraySum(nums: number[]): number {
  const n = nums.length;
  const prefixSum = new Array<number>(n + 1).fill(0);
  let answer = 0;
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
    answer += prefixSum[i + 1] - prefixSum[Math.max(0, i - nums[i])];
  }
  return answer;
}
