/**
 * 1287. Element Appearing More Than 25% In Sorted Array
 * https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array
 */
export function findSpecialInteger(arr: number[]): number {
  const n = arr.length;
  const quater = Math.floor(n / 4);

  for (let i = 0; i < n - quater; i++) {
    if (arr[i] === arr[i + quater]) {
      return arr[i];
    }
  }

  throw new Error('There is no element that appear more than 25%.');
}
