/**
 * 1458. Max Dot Product of Two Subsequences
 * https://leetcode.com/problems/max-dot-product-of-two-subsequences
 */
export function maxDotProduct(nums1: number[], nums2: number[]): number {
  const minmax = (nums: number[]): [number, number] => {
    return nums.reduce(
      ([min, max], num) => [Math.min(min, num), Math.max(max, num)],
      [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER],
    );
  };

  const [min1, max1] = minmax(nums1);
  const [min2, max2] = minmax(nums2);
  if (max1 < 0 && 0 < min2) {
    return max1 * min2;
  }
  if (0 < min1 && max2 < 0) {
    return min1 * max2;
  }

  const [n, m] = [nums1.length, nums2.length];
  const dp = new Array(n + 1).fill(undefined).map(() => new Array<number>(m + 1).fill(0));
  for (let i = n - 1; 0 <= i; i--) {
    for (let j = m - 1; 0 <= j; j--) {
      dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1], nums1[i] * nums2[j] + dp[i + 1][j + 1]);
    }
  }

  return dp[0][0];
}
