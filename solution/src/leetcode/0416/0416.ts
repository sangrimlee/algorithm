/**
 * 416. Partition Equal Subset Sum
 * https://leetcode.com/problems/partition-equal-subset-sum
 */
export function canPartition(nums: number[]): boolean {
  const totalSum = nums.reduce((acc, num) => acc + num, 0);
  if (totalSum % 2 !== 0) {
    return false;
  }

  const targetSum = totalSum / 2;
  const dp = new Array<boolean>(targetSum + 1).fill(false);
  dp[0] = true;
  for (const num of nums) {
    for (let sum = targetSum; sum >= num; sum--) {
      dp[sum] = dp[sum] || dp[sum - num];
      if (dp[targetSum]) {
        return true;
      }
    }
  }
  return dp[targetSum];
}
