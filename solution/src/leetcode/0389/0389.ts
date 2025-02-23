/**
 * 389. Find the Difference
 * https://leetcode.com/problems/find-the-difference
 */
export function findTheDifference(s: string, t: string): string {
  let answer = 0;
  for (const char of s) {
    answer ^= char.charCodeAt(0);
  }
  for (const char of t) {
    answer ^= char.charCodeAt(0);
  }
  return String.fromCharCode(answer);
}
