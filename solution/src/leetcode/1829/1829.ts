/**
 * 1829. Maximum XOR for Each Query
 * https://leetcode.com/problems/maximum-xor-for-each-query
 */
export function getMaximumXor(nums: number[], maximumBit: number): number[] {
  const n = nums.length;
  const maxXor = (1 << maximumBit) - 1;
  const arrXor = nums.reduce((prev, num) => prev ^ num, 0);

  const answer: number[] = [];
  let xor = arrXor;
  for (let i = n - 1; 0 <= i; i--) {
    answer.push(xor ^ maxXor);
    xor ^= nums[i];
  }
  return answer;
}
