/**
 * 689. Maximum Sum of 3 Non-Overlapping Subarrays
 * https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays
 */
export function maxSumOfThreeSubarrays(nums: number[], k: number): number[] {
  const n = nums.length;

  let singleSum = rangeSum(nums, 0, k);
  let doubleSum = rangeSum(nums, k, 2 * k);
  let tripleSum = rangeSum(nums, 2 * k, 3 * k);

  let bestSingleSum = singleSum;
  let bestDoubleSum = singleSum + doubleSum;
  let bestTripleSum = singleSum + doubleSum + tripleSum;

  let bestSingleStart = 0;
  let bestDoubleStart = [0, k];
  let bestTripleStart = [0, k, k * 2];

  let singleStart = 1;
  let doubleStart = k + 1;
  let tripleStart = 2 * k + 1;
  while (tripleStart <= n - k) {
    singleSum += nums[singleStart + k - 1] - nums[singleStart - 1];
    doubleSum += nums[doubleStart + k - 1] - nums[doubleStart - 1];
    tripleSum += nums[tripleStart + k - 1] - nums[tripleStart - 1];

    if (bestSingleSum < singleSum) {
      bestSingleStart = singleStart;
      bestSingleSum = singleSum;
    }

    if (bestDoubleSum < bestSingleSum + doubleSum) {
      bestDoubleStart = [bestSingleStart, doubleStart];
      bestDoubleSum = bestSingleSum + doubleSum;
    }

    if (bestTripleSum < bestDoubleSum + tripleSum) {
      bestTripleStart = [...bestDoubleStart, tripleStart];
      bestTripleSum = bestDoubleSum + tripleSum;
    }

    singleStart += 1;
    doubleStart += 1;
    tripleStart += 1;
  }

  return bestTripleStart;
}

function rangeSum(arr: number[], start: number, end: number) {
  let sum = 0;
  for (let i = start; i < end; i++) {
    sum += arr[i];
  }
  return sum;
}
