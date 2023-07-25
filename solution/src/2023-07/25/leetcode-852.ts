/**
 * 852. Peak Index in a Mountain Array
 * https://leetcode.com/problems/peak-index-in-a-mountain-array
 */
export function peakIndexInMountainArray(arr: number[]): number {
  let [left, right] = [0, arr.length];

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}
