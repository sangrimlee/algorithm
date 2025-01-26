/**
 * 2425. Bitwise XOR of All Pairings
 * https://leetcode.com/problems/bitwise-xor-of-all-pairings
 */
export function xorAllNums(nums1: number[], nums2: number[]): number {
  const [m, n] = [nums1.length, nums2.length];
  const xor1 = n % 2 === 0 ? 0 : nums1.reduce(xor, 0);
  const xor2 = m % 2 === 0 ? 0 : nums2.reduce(xor, 0);
  return xor1 ^ xor2;
}

function xor(a: number, b: number): number {
  return a ^ b;
}