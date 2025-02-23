/**
 * 1531. String Compression II
 * https://leetcode.com/problems/string-compression-ii/
 */
export function getLengthOfOptimalCompression(s: string, k: number): number {
  const n = s.length;
  const memo: Record<string, number> = {};

  function dfs(curr: number, k: number, same: number, last = ''): number {
    if (k < 0) return 101;
    if (n - curr === k) return 0;
    const key = [curr, k, same, last].join('-');
    if (memo[key]) {
      return memo[key];
    }

    if (s[curr] === last) {
      const carry = [1, 9, 99].includes(same) ? 1 : 0;
      memo[key] = carry + dfs(curr + 1, k, same + 1, last);
    } else {
      memo[key] = Math.min(dfs(curr + 1, k, 1, s[curr]) + 1, dfs(curr + 1, k - 1, same, last));
    }
    return memo[key];
  }

  return dfs(0, k, 0);
}
