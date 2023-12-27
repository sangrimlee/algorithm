/**
 * 1784. Check if Binary String Has at Most One Segment of Ones
 * https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones
 */
export function checkOnesSegment(s: string): boolean {
  return !s.includes('01');
}
