/**
 * 941. Valid Mountain Array
 * https://leetcode.com/problems/valid-mountain-array
 */
export function validMountainArray(arr: number[]): boolean {
  const n = arr.length;
  if (n < 3) {
    return false;
  }

  let i = 0;
  while (i < n - 1 && arr[i] < arr[i + 1]) {
    i += 1;
  }
  let j = n - 1;
  while (0 < j && arr[j - 1] > arr[j]) {
    j -= 1;
  }
  return i === j && i !== 0 && j !== n - 1;
}
