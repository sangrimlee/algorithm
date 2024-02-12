/**
 * 300. Longest Increasing arrsequence
 * https://leetcode.com/problems/longest-increasing-subsequence
 */
export function lengthOfLIS(nums: number[]): number {
  function lowerbound(arr: number[], target: number): number {
    let [left, right] = [0, arr.length];
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }

  const arr: number[] = [];
  for (const num of nums) {
    if (arr.length === 0 || arr[arr.length - 1] < num) {
      arr.push(num);
    } else {
      arr[lowerbound(arr, num)] = num;
    }
  }
  return arr.length;
}
