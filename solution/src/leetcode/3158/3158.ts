/**
 * 3158. Find the XOR of Numbers Which Appear Twice
 * https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice
 */
export function duplicateNumbersXOR(nums: number[]): number {
  const arr = [...nums, ...new Set(nums)];
  return arr.reduce((acc, num) => acc ^ num, 0);
}
