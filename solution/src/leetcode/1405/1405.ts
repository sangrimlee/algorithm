/**
 * 1405. Longest Happy String
 * https://leetcode.com/problems/longest-happy-string
 */
export function longestDiverseString(a: number, b: number, c: number): string {
  const n = a + b + c;

  let answer = '';
  let [curra, currb, currc] = [0, 0, 0];
  for (let i = 0; i < n; i++) {
    if ((a >= b && a >= c && curra != 2) || (a > 0 && (currb == 2 || currc == 2))) {
      [curra, currb, currc] = [curra + 1, 0, 0];
      answer += 'a';
      a -= 1;
    } else if ((b >= a && b >= c && currb != 2) || (b > 0 && (currc == 2 || curra == 2))) {
      [curra, currb, currc] = [0, currb + 1, 0];
      answer += 'b';
      b -= 1;
    } else if ((c >= a && c >= b && currc != 2) || (c > 0 && (curra == 2 || currb == 2))) {
      [curra, currb, currc] = [0, 0, currc + 1];
      answer += 'c';
      c -= 1;
    }
  }
  return answer;
}
