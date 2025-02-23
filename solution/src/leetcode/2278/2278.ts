/**
 * 2278. Percentage of Letter in String
 * https://leetcode.com/problems/percentage-of-letter-in-string
 */
export function percentageLetter(s: string, letter: string): number {
  let letterCount = 0;
  for (const char of s) {
    if (char === letter) {
      letterCount += 1;
    }
  }
  return Math.floor((letterCount / s.length) * 100);
}
