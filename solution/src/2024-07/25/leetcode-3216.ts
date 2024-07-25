/**
 * 3216. Lexicographically Smallest String After a Swap
 * https://leetcode.com/problems/lexicographically-smallest-string-after-a-swap
 */
export function getSmallestString(s: string): string {
  const n = s.length;
  for (let i = 0; i < n - 1; i++) {
    const [left, right] = [parseInt(s[i]), parseInt(s[i + 1])];
    if ((left + right) % 2 === 0 && left > right) {
      return `${s.substring(0, i)}${right}${left}${s.substring(i + 2)}`;
    }
  }
  return s;
}
