/**
 * 1043. Partition Array for Maximum Sum
 * https://leetcode.com/problems/partition-array-for-maximum-sum
 */
export function maxSumAfterPartitioning(arr: number[], k: number): number {
  const n = arr.length;
  const dp = new Array<number>(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    let maxValue = 0;
    let maxSum = 0;
    for (let j = 1; j <= k && j <= i; j++) {
      maxValue = Math.max(maxValue, arr[i - j]);
      maxSum = Math.max(maxSum, dp[i - j] + maxValue * j);
    }
    dp[i] = maxSum;
  }

  return dp[n];
}
