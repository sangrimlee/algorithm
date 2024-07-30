/**
 * 1653. Minimum Deletions to Make String Balanced
 * https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/
 */
export function minimumDeletions(s: string): number {
  let answer = 0;
  let bCount = 0;
  for (const char of s) {
    if (char === 'b') {
      bCount += 1;
    } else {
      answer = Math.min(answer + 1, bCount);
    }
  }
  return answer;
}
