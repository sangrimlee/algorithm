/**
 * 921. Minimum Add to Make Parentheses Valid
 * https://leetcode.com/problems/minimum-add-to-make-parentheses-valid
 */
export function minAddToMakeValid(s: string): number {
  let [open, close] = [0, 0];
  for (const char of s) {
    if (char === '(') {
      open += 1;
    } else if (0 < open) {
      open -= 1;
    } else {
      close += 1;
    }
  }
  return open + close;
}
