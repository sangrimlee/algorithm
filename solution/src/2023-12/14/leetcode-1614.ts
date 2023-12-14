/**
 * 1614. Maximum Nesting Depth of the Parentheses
 * https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses
 */
export function maxDepth(s: string): number {
  let answer = 0;
  let currentDepth = 0;
  for (const char of s) {
    if (char !== '(' && char !== ')') continue;
    if (char === '(') {
      currentDepth += 1;
    } else {
      currentDepth -= 1;
    }
    answer = Math.max(answer, currentDepth);
  }
  return answer;
}
