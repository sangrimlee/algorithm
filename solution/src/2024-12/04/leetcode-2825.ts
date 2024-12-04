/**
 * 2825. Make String a Subsequence Using Cyclic Increments
 * https://leetcode.com/problems/make-string-a-subsequence-using-cyclic-increments
 */
export function canMakeSubsequence(str1: string, str2: string): boolean {
  const [m, n] = [str1.length, str2.length];
  let [i, j] = [0, 0];
  while (i < m && j < n) {
    if (canChange(str1[i], str2[j])) {
      j += 1;
    }
    i += 1;
  }
  return j === n;
}

function canChange(char1: string, char2: string) {
  const code1 = char1.charCodeAt(0);
  const code2 = char2.charCodeAt(0);
  return code1 === code2 || code1 + 1 === code2 || code1 - 25 === code2;
}
