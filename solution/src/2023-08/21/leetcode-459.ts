/**
 * 459. Repeated Substring Pattern
 * https://leetcode.com/problems/repeated-substring-pattern
 */
export function repeatedSubstringPattern(s: string): boolean {
  const concatenated = s + s;
  return concatenated.slice(1, -1).includes(s);
}
