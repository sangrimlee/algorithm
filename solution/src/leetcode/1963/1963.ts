/**
 * 1963. Minimum Number of Swaps to Make the String Balanced
 * https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced
 */
export function minSwaps(s: string): number {
  let bracketCount = 0;
  for (const char of s) {
    if (char === '[') {
      bracketCount += 1;
    } else {
      bracketCount = Math.max(0, bracketCount - 1);
    }
  }
  return Math.ceil(bracketCount / 2);
}
