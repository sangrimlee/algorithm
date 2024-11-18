/**
 * 1574. Shortest Subarray to be Removed to Make Array Sorted
 * https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted
 */
export function findLengthOfShortestSubarray(arr: number[]): number {
  const n = arr.length;

  let [left, right] = [0, n - 1];
  while (left < n - 1 && arr[left] <= arr[left + 1]) {
    left += 1;
  }
  if (left === n - 1) {
    return 0;
  }
  while (left < right && arr[right - 1] <= arr[right]) {
    right -= 1;
  }

  let answer = Math.min(n - left - 1, right);
  let [inLeftRange, inRightRange] = [0, right];
  while (inLeftRange <= left && inRightRange < n) {
    if (arr[inLeftRange] <= arr[inRightRange]) {
      answer = Math.min(answer, inRightRange - inLeftRange - 1);
      inLeftRange += 1;
    } else {
      inRightRange += 1;
    }
  }
  return answer;
}