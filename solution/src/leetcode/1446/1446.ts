/**
 * 1446. Consecutive Characters
 * https://leetcode.com/problems/consecutive-characters
 */
export function maxPower(s: string): number {
  let maxLength = 1;
  let prevChar = '';
  let prevLength = 0;
  for (const char of s) {
    if (prevChar !== char) {
      prevChar = char;
      prevLength = 1;
    } else {
      prevLength += 1;
      maxLength = Math.max(maxLength, prevLength);
    }
  }
  return maxLength;
}
