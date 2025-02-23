/**
 * 520. Detect Capital
 * https://leetcode.com/problems/detect-capital
 */
export function detectCapitalUse(word: string): boolean {
  return /^[A-Z]+$|^[A-Z]?[a-z]+$/.test(word);
}
