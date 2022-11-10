/**
 * 1047. Remove All Adjacent Duplicates In String
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
 */
export function removeDuplicates(s: string): string {
  const stack: string[] = [];
  const topOfStack = () => stack[stack.length - 1];
  for (const char of s) {
    if (topOfStack() === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join('');
}
