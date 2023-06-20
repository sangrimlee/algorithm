import { range } from '@algorithm/lib';

/**
 * 2090. K Radius Subarray Averages
 * https://leetcode.com/problems/k-radius-subarray-averages
 */
export function getAverages(nums: number[], k: number): number[] {
  if (k === 0) {
    return nums;
  }

  const n = nums.length;
  const averages = new Array<number>(n).fill(-1);

  if (n < 2 * k + 1) {
    return averages;
  }

  let rangeSum = nums.slice(0, 2 * k + 1).reduce((acc, num) => acc + num, 0);
  averages[k] = Math.floor(rangeSum / (2 * k + 1));

  for (const i of range(2 * k + 1, n)) {
    rangeSum += nums[i] - nums[i - (2 * k + 1)];
    averages[i - k] = Math.floor(rangeSum / (2 * k + 1));
  }

  return averages;
}
