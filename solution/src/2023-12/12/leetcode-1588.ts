/**
 * 1588. Sum of All Odd Length Subarrays
 * https://leetcode.com/problems/sum-of-all-odd-length-subarrays
 */
export function sumOddLengthSubarrays(arr: number[]): number {
  return arr.reduce((acc, num, i) => acc + num * Math.ceil(((i + 1) * (arr.length - i)) / 2), 0);
}
