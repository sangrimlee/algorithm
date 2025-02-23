/**
 * 2696. Minimum String Length After Removing Substrings
 * https://leetcode.com/problems/minimum-string-length-after-removing-substrings
 */
export function minLength(s: string): number {
  const stack: string[] = [];
  for (const char of s) {
    const last = stack[stack.length - 1] ?? '';
    if (['AB', 'CD'].includes(last + char)) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.length;
}
