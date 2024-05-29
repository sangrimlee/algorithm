/**
 * 1404. Number of Steps to Reduce a Number in Binary Representation to One
 * https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one
 */
export function numSteps(s: string): number {
  let answer = 0;
  let carry = 0;

  for (let i = s.length - 1; 0 < i; i--) {
    const bit = parseInt(s[i]);
    if (bit + carry === 1) {
      carry = 1;
      answer += 1;
    }
    answer += 1;
  }

  return answer + carry;
}
