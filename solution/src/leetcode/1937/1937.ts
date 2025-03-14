/**
 * 1937. Maximum Number of Points with Cost
 * https://leetcode.com/problems/maximum-number-of-points-with-cost
 */
export function maxPoints(points: number[][]): number {
  const [m, n] = [points.length, points[0].length];
  let dp = [...points[0]];

  for (let r = 1; r < m; r++) {
    const leftMax = new Array<number>(n).fill(0);
    leftMax[0] = dp[0];
    for (let c = 1; c < n; c++) {
      leftMax[c] = Math.max(leftMax[c - 1], dp[c] + c);
    }

    const rightMax = new Array<number>(n).fill(0);
    rightMax[n - 1] = dp[n - 1] - (n - 1);
    for (let c = n - 2; 0 <= c; c--) {
      rightMax[c] = Math.max(rightMax[c + 1], dp[c] - c);
    }

    dp = points[r].map((point, i) => Math.max(leftMax[i] - i, rightMax[i] + i) + point);
  }

  return dp.reduce((prev, value) => Math.max(prev, value), 0);
}
