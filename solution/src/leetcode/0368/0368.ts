/**
 * 368. Largest Divisible Subset
 * https://leetcode.com/problems/largest-divisible-subset
 */
export function largestDivisibleSubset(nums: number[]): number[] {
  nums.sort((a, b) => a - b);

  const n = nums.length;
  const dp = new Array<number>(n).fill(1);
  const prev = new Array<number>(n).fill(-1);

  let maxIndex = 0;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0 && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
        prev[i] = j;
      }
    }
    if (dp[maxIndex] < dp[i]) {
      maxIndex = i;
    }
  }

  const answer: number[] = [];
  let currentIndex = maxIndex;
  while (currentIndex !== -1) {
    answer.push(nums[currentIndex]);
    currentIndex = prev[currentIndex];
  }
  return answer;
}
