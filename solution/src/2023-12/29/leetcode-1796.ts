/**
 * 1796. Second Largest Digit in a String
 * https://leetcode.com/problems/second-largest-digit-in-a-string
 */
export function secondHighest(s: string): number {
  return [...new Set(s.replace(/[^0-9]/g, ''))].map((v) => +v).sort((a, b) => b - a)[1] ?? -1;
}
