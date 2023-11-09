/**
 * 1005. Maximize Sum Of Array After K Negations
 * https://leetcode.com/problems/maximize-sum-of-array-after-k-negations
 */
export function largestSumAfterKNegations(nums: number[], k: number): number {
  const n = nums.length;
  nums.sort((a, b) => Math.abs(b) - Math.abs(a));

  let sum = 0;
  let remain = k;
  for (let i = 0; i < n; i++) {
    if (nums[i] < 0 && 0 < remain) {
      nums[i] = -nums[i];
      remain -= 1;
    }
    sum += nums[i];
  }

  if (remain % 2 === 1) {
    return sum - 2 * nums[n - 1];
  }

  return sum;
}
