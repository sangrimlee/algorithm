/**
 * 2390. Removing Stars From a String
 * https://leetcode.com/problems/removing-stars-from-a-string
 */
export function removeStars(s: string): string {
  const stack: string[] = [];
  for (const char of s) {
    if (char === '*') {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join('');
}
