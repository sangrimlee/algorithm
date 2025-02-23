/**
 * 2027. Minimum Moves to Convert String
 * https://leetcode.com/problems/minimum-moves-to-convert-string
 */
export function minimumMoves(s: string): number {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'X') {
      answer += 1;
      i += 2;
    }
  }
  return answer;
}
