/**
 * 942. DI String Match
 * https://leetcode.com/problems/di-string-match
 */
export function diStringMatch(s: string): number[] {
  let low = 0;
  let high = s.length;
  const perm = [];
  for (const char of s) {
    if (char === 'I') {
      perm.push(low);
      low += 1;
    } else {
      perm.push(high);
      high -= 1;
    }
  }
  perm.push(low);
  return perm;
}
