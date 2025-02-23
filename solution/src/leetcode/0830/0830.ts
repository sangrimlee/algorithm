/**
 * 830. Positions of Large Groups
 * https://leetcode.com/problems/positions-of-large-groups
 */
export function largeGroupPositions(s: string): number[][] {
  const n = s.length;
  const answer: number[][] = [];

  let start = 0;
  for (let end = 1; end < n; end++) {
    if (s[start] === s[end]) continue;
    if (3 <= end - start) {
      answer.push([start, end - 1]);
    }
    start = end;
  }
  if (3 <= n - start) {
    answer.push([start, n - 1]);
  }

  return answer;
}
