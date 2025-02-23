/**
 * 2609. Find the Longest Balanced Substring of a Binary String
 * https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string
 */
export function findTheLongestBalancedSubstring(s: string): number {
  let answer = 0;
  let [zeros, ones] = [0, 0];
  for (const char of s) {
    if (char === '0') {
      zeros = 0 < ones ? 1 : zeros + 1;
      ones = 0;
    } else {
      ones += 1;
      answer = Math.max(answer, Math.min(zeros, ones) * 2);
    }
  }
  return answer;
}
