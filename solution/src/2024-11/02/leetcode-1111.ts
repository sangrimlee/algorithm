/**
 * 1111. Maximum Nesting Depth of Two Valid Parentheses Strings
 * https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings
 */
export function maxDepthAfterSplit(seq: string): number[] {
  const answer: number[] = [];

  let depth = 0;
  for (const char of seq) {
    if (char === '(') {
      depth += 1;
      answer.push(depth % 2);
    } else {
      answer.push(depth % 2);
      depth -= 1;
    }
  }
  return answer;
}
