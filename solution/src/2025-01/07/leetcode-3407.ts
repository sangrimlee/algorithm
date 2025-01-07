/**
 * 3407. Substring Matching Pattern
 * https://leetcode.com/problems/substring-matching-pattern
 */
export function hasMatch(s: string, p: string): boolean {
  const [left, right] = p.split('*');
  const leftIndex = s.indexOf(left);
  const rightIndex = s.lastIndexOf(right);
  if (leftIndex === -1 || rightIndex === -1) {
    return false;
  }
  return leftIndex + left.length <= rightIndex;
}
