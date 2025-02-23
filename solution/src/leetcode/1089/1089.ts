/**
 * 1089. Duplicate Zeros
 * https://leetcode.com/problems/duplicate-zeros
 */
export function duplicateZeros(arr: number[]): void {
  const n = arr.length;
  let zeroCount = arr.filter((num) => num === 0).length;
  for (let i = n - 1; 0 <= i; i--) {
    if (i + zeroCount < n) {
      arr[i + zeroCount] = arr[i];
    }

    if (arr[i] === 0) {
      zeroCount -= 1;
      if (i + zeroCount < n) {
        arr[i + zeroCount] = 0;
      }
    }
  }
}
