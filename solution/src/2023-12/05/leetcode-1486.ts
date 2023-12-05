/**
 * 1486. XOR Operation in an Array
 * https://leetcode.com/problems/xor-operation-in-an-array
 */
export function xorOperation(n: number, start: number): number {
  const nums = Array.from({ length: n }, (_, i) => start + 2 * i);
  return nums.reduce((prev, num) => prev ^ num, 0);
}
