/**
 * 2914. Minimum Number of Changes to Make Binary String Beautiful
 * https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful
 */
export function minChanges(s: string): number {
  const n = s.length;
  let answer = 0;
  for (let i = 0; i < n; i += 2) {
    if (s[i] !== s[i + 1]) {
      answer += 1;
    }
  }
  return answer;
}
