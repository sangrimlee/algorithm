/**
 * 3432. Count Partitions with Even Sum Difference
 * https://leetcode.com/problems/count-partitions-with-even-sum-difference
 */
export function countPartitions(nums: number[]): number {
  const n = nums.length;
  const totalSum = nums.reduce((acc, num) => acc + num, 0);

  let answer = 0;
  let currentSum = 0;
  for (let i = 0; i < n - 1; i++) {
    currentSum += nums[i];
    const difference = totalSum - 2 * currentSum;
    if (difference % 2 === 0) {
      answer += 1;
    }
  }
  return answer;
}
