/**
 * 1221. Split a String in Balanced Strings
 * https://leetcode.com/problems/split-a-string-in-balanced-strings
 */
export function balancedStringSplit(s: string): number {
  let answer = 0;
  let leftCount = 0;
  for (const char of s) {
    leftCount += char === 'L' ? 1 : -1;
    if (leftCount === 0) {
      answer += 1;
    }
  }
  return answer;
}
