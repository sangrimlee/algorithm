/**
 * 1021. Remove Outermost Parentheses
 * https://leetcode.com/problems/remove-outermost-parentheses
 */
export function removeOuterParentheses(s: string): string {
  let answer = '';
  let leftCnt = 0;
  for (const char of s) {
    if ((char === '(' && 0 < leftCnt) || (char === ')' && 1 < leftCnt)) {
      answer += char;
    }
    leftCnt += char === '(' ? 1 : -1;
  }
  return answer;
}
