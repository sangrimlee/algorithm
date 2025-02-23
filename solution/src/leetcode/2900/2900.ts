/**
 * 2900. Longest Unequal Adjacent Groups Subsequence I
 * https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i
 */
export function getLongestSubsequence(words: string[], groups: number[]): string[] {
  const n = words.length;

  const answer = [];
  let prevGroup = -1;
  for (let i = 0; i < n; i++) {
    if (groups[i] !== prevGroup) {
      prevGroup = groups[i];
      answer.push(words[i]);
    }
  }
  return answer;
}
