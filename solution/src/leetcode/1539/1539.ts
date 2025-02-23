/**
 * 1539. Kth Missing Positive Number
 * https://leetcode.com/problems/kth-missing-positive-number
 */
export function findKthPositive(arr: number[], k: number): number {
  let [start, end] = [0, arr.length];
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] - mid - 1 < k) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return end + k;
}
