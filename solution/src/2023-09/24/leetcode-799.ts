/**
 * 799. Champagne Tower
 * https://leetcode.com/problems/champagne-tower
 */
export function champagneTower(poured: number, query_row: number, query_glass: number): number {
  const dp = new Array(query_row + 1).fill(undefined).map((_, i) => new Array(i + 1).fill(0));
  dp[0][0] = poured;

  for (let row = 0; row < query_row; row++) {
    for (let col = 0; col <= row; col++) {
      const remain = dp[row][col] - 1;
      if (0 < remain) {
        dp[row][col] = 1;
        dp[row + 1][col] += remain / 2;
        dp[row + 1][col + 1] += remain / 2;
      }
    }
  }
  return Math.min(dp[query_row][query_glass], 1);
}
