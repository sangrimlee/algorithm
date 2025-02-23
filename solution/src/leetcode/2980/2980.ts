/**
 * 2980. Check if Bitwise OR Has Trailing Zeros
 * https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros
 */
export function hasTrailingZeros(nums: number[]): boolean {
  return nums.filter((num) => (num & 1) === 0).length >= 2;
}
