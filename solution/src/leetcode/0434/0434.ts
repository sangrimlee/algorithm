/**
 * 434. Number of Segments in a String
 * https://leetcode.com/problems/number-of-segments-in-a-string
 */
export function countSegments(s: string): number {
  const matched = s.match(/([^ ]+)/g);
  return matched ? matched.length : 0;
}
