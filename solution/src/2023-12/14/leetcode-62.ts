/**
 * 62. Unique Paths
 * https://leetcode.com/problems/unique-paths
 */
export function uniquePaths(m: number, n: number): number {
  const combination = (k: number, n: number): number => {
    if (k === 0) {
      return 1;
    }
    if (k === 1) {
      return n / k;
    }
    return (n / k) * combination(k - 1, n - 1);
  };
  return combination(m - 1, m + n - 2);
}
