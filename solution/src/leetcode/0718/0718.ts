/**
 * 718. Maximum Length of Repeated Subarray
 * https://leetcode.com/problems/maximum-length-of-repeated-subarray/
 */
export function findLength(nums1: number[], nums2: number[]): number {
  const [N, M] = [nums1.length, nums2.length];
  const dp = new Array(N + 1).fill(undefined).map(() => new Array<number>(M + 1).fill(0));

  for (let i = N - 1; 0 <= i; i--) {
    for (let j = M - 1; 0 <= j; j--) {
      if (nums1[i] === nums2[j]) {
        dp[i][j] = dp[i + 1][j + 1] + 1;
      }
    }
  }

  return Math.max(...dp.map((row) => Math.max(...row)));
}
