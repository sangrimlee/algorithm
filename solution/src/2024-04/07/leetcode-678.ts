/**
 * 678. Valid Parenthesis String
 * https://leetcode.com/problems/valid-parenthesis-string
 */
export function checkValidString(s: string): boolean {
  let [minCount, maxCount] = [0, 0];
  for (const char of s) {
    if (char === '(') {
      minCount += 1;
      maxCount += 1;
    } else if (char === ')') {
      minCount = Math.max(minCount - 1, 0);
      maxCount -= 1;
    } else {
      minCount = Math.max(minCount - 1, 0);
      maxCount += 1;
    }
    if (maxCount < 0) {
      return false;
    }
  }
  return minCount === 0;
}
