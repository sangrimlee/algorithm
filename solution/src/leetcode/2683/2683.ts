/**
 * 2683. Neighboring Bitwise XOR
 * https://leetcode.com/problems/neighboring-bitwise-xor
 */
export function doesValidArrayExist(derived: number[]): boolean {
  return derived.reduce((prev, curr) => prev ^ curr, 0) === 0;
}
