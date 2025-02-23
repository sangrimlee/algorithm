/**
 * 2716. Minimize String Length
 * https://leetcode.com/problems/minimize-string-length
 */
export function minimizedStringLength(s: string): number {
  return new Set(s).size;
}
