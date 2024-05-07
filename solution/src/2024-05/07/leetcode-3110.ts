/**
 * 3110. Score of a String
 * https://leetcode.com/problems/score-of-a-string
 */
export function scoreOfString(s: string): number {
  const n = s.length;

  let answer = 0;
  for (let i = 0; i < n - 1; i++) {
    const score = Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
    answer += score;
  }
  return answer;
}
