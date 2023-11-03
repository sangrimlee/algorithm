/**
 * 917. Reverse Only Letters
 * https://leetcode.com/problems/reverse-only-letters
 */
export function reverseOnlyLetters(s: string): string {
  const n = s.length;
  const regex = /[a-z]/i;

  let answer = '';
  let lastIndex = n - 1;
  for (let i = 0; i < n; i++) {
    while (0 <= lastIndex && !regex.test(s[lastIndex])) {
      lastIndex -= 1;
    }
    if (regex.test(s[i])) {
      answer += s[lastIndex];
      lastIndex -= 1;
    } else {
      answer += s[i];
    }
  }
  return answer;
}
