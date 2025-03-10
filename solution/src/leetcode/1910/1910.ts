/**
 * 1910. Remove All Occurrences of a Substring
 * https://leetcode.com/problems/remove-all-occurrences-of-a-substring
 */
export function removeOccurrences(s: string, part: string): string {
  let current = s;
  while (current.includes(part)) {
    current = current.replace(part, '');
  }
  return current;
}
