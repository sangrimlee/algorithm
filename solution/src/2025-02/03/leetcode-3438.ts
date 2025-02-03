/**
 * 3438. Find Valid Pair of Adjacent Digits in String
 * https://leetcode.com/problems/find-valid-pair-of-adjacent-digits-in-string
 */
export function findValidPair(s: string): string {
  const counts = new Array(10).fill(0);
  for (const char of s) {
    const digit = parseInt(char, 10);
    counts[digit] += 1;
  }

  for (let i = 1; i < s.length; i++) {
    const left = parseInt(s[i - 1], 10);
    const right = parseInt(s[i], 10);
    if (left !== right && counts[left] === left && counts[right] === right) {
      return `${left}${right}`;
    }
  }
  return '';
}
