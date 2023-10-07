/**
 * 455. Assign Cookies
 * https://leetcode.com/problems/assign-cookies
 */
export function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let answer = 0;
  let [i, j] = [0, 0];
  while (i < g.length && j < s.length) {
    if (g[i] <= s[j]) {
      i += 1;
      answer += 1;
    }
    j += 1;
  }
  return answer;
}
