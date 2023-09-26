/**
 * 316. Remove Duplicate Letters
 * https://leetcode.com/problems/remove-duplicate-letters
 */
export function removeDuplicateLetters(s: string): string {
  const lastIndicies = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    lastIndicies.set(s[i], i);
  }

  const stack: string[] = [];
  const inStack = new Set<string>();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (inStack.has(char)) {
      continue;
    }
    while (
      0 < stack.length &&
      char < stack[stack.length - 1] &&
      i < (lastIndicies.get(stack[stack.length - 1]) ?? 0)
    ) {
      inStack.delete(stack[stack.length - 1]);
      stack.pop();
    }
    stack.push(char);
    inStack.add(char);
  }

  return stack.join('');
}
