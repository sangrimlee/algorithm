/**
 * 2124. Check if All A's Appears Before All B's
 * https://leetcode.com/problems/check-if-all-as-appears-before-all-bs
 */
export function checkString(s: string): boolean {
  const lastAIndex = s.lastIndexOf('a');
  const firstBIndex = s.indexOf('b');
  if (lastAIndex === -1 || firstBIndex === -1) {
    return true;
  }
  return lastAIndex < firstBIndex;
}
