import { range } from '@lib/range';

/**
 * 2256. Minimum Average Difference
 * https://leetcode.com/problems/minimum-average-difference/
 */
export function minimumAverageDifference(nums: number[]): number {
  const average = (total: number, length: number) => {
    return length === 0 ? 0 : Math.floor(total / length);
  };

  const n = nums.length;
  const totalSum = nums.reduce((prev, curr) => prev + curr, 0);

  let answer = 0;
  let minAvgDiff = Number.MAX_SAFE_INTEGER;
  let currPrefixSum = 0;
  for (const i of range(n)) {
    currPrefixSum += nums[i];
    const leftAverage = average(currPrefixSum, i + 1);
    const rightAverage = average(totalSum - currPrefixSum, n - 1 - i);
    const avgDiff = Math.abs(leftAverage - rightAverage);

    if (avgDiff < minAvgDiff) {
      minAvgDiff = avgDiff;
      answer = i;
    }
  }

  return answer;
}
