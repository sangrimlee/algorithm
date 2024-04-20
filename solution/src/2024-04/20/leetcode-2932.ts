/**
 * 2932. Maximum Strong Pair XOR I
 * https://leetcode.com/problems/maximum-strong-pair-xor-i
 */
export function maximumStrongPairXor(nums: number[]): number {
  let answer = 0;
  for (const x of nums) {
    for (const y of nums) {
      if (Math.abs(x - y) <= Math.min(x, y)) {
        answer = Math.max(answer, x ^ y);
      }
    }
  }
  return answer;
}
