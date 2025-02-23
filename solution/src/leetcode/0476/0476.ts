/**
 * 476. Number Complement
 * https://leetcode.com/problems/number-complement
 */
export function findComplement(num: number): number {
  const bitSize = Math.floor(Math.log2(num));
  return num ^ ((2 << bitSize) - 1);
}
