/**
 * 2529. Maximum Count of Positive Integer and Negative Integer
 * https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer
 */
export function maximumCount(nums: number[]): number {
  const n = nums.length;
  const neg = lowerBound(nums, 0);
  const pos = n - lowerBound(nums, 1);
  return Math.max(neg, pos);
}

function lowerBound(arr: number[], target: number) {
  let [left, right] = [0, arr.length];
  while (left < right) {
    const mid = Math.floor((right + left) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}
