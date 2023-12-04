/**
 * 2264. Largest 3-Same-Digit Number in String
 * https://leetcode.com/problems/largest-3-same-digit-number-in-string
 */
export function largestGoodInteger(num: string): string {
  const n = num.length;

  let answer = -1;
  for (let i = 0; i < n - 2; i++) {
    if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
      answer = Math.max(answer, parseInt(num[i]));
    }
  }
  return answer === -1 ? '' : answer.toString().repeat(3);
}
