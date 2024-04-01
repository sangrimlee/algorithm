/**
 * 58. Length of Last Word
 * https://leetcode.com/problems/length-of-last-word
 */
export function lengthOfLastWord(s: string): number {
  let [start, end] = [s.length - 1, -1];
  while (0 <= start && (s[start] !== ' ' || end < 0)) {
    if (s[start] !== ' ' && end < 0) {
      end = start;
    }
    start -= 1;
  }
  return end - start;
}
