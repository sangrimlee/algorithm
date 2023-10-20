/**
 * 628. Maximum Product of Three Numbers
 * https://leetcode.com/problems/maximum-product-of-three-numbers
 */
export function maximumProduct(nums: number[]): number {
  nums.sort((a, b) => a - b);

  const n = nums.length;
  const maxProduct = nums[n - 3] * nums[n - 2] * nums[n - 1];
  if (0 <= nums[0] || 0 <= nums[1]) {
    return maxProduct;
  }
  return Math.max(maxProduct, nums[0] * nums[1] * nums[n - 1]);
}
