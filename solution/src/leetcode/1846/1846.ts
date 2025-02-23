/**
 * 1846. Maximum Element After Decreasing and Rearranging
 * https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging
 */
export function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {
  return arr.sort((a, b) => a - b).reduce((prev, num) => Math.min(prev + 1, num), 0);
}
