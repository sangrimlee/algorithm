/**
 * 1758. Minimum Changes To Make Alternating Binary String
 * https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string
 */
export function minOperations(s: string): number {
  let firstOne = 0;
  let firstZero = 0;
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      s[i] === '0' ? firstOne++ : firstZero++;
    } else {
      s[i] === '1' ? firstOne++ : firstZero++;
    }
  }
  return Math.min(firstZero, firstOne);
}
