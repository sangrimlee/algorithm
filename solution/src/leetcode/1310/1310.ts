/**
 * 1310. XOR Queries of a Subarray
 * https://leetcode.com/problems/xor-queries-of-a-subarray
 */
export function xorQueries(arr: number[], queries: number[][]): number[] {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    arr[i] ^= arr[i - 1];
  }
  return queries.map(([left, right]) => (left === 0 ? arr[right] : arr[left - 1] ^ arr[right]));
}
