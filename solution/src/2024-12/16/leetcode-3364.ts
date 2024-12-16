/**
 * 3364. Minimum Positive Sum Subarray
 * https://leetcode.com/problems/minimum-positive-sum-subarray
 */
export function minimumSumSubarray(nums: number[], l: number, r: number): number {
  const n = nums.length;
  const prefixSum = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }

  let answer = Number.MAX_SAFE_INTEGER;
  for (let size = l; size <= r; size++) {
    for (let i = 0; i + size <= n; i++) {
      const sum = prefixSum[i + size] - prefixSum[i];
      if (0 < sum) {
        answer = Math.min(answer, sum);
      }
    }
  }
  return answer === Number.MAX_SAFE_INTEGER ? -1 : answer;
}
