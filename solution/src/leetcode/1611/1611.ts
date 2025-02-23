/**
 * 1611. Minimum One Bit Operations to Make Integers Zero
 * https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero
 */
export function minimumOneBitOperations(n: number): number {
  if (n <= 1) {
    return n;
  }

  let answer = 0;
  let [k, mask] = [0, 1];
  while (mask <= n) {
    if (n & mask) {
      answer = 2 ** (k + 1) - 1 - answer;
    }
    mask <<= 1;
    k += 1;
  }
  return answer;
}
