/**
 * 1913. Maximum Product Difference Between Two Pairs
 * https://leetcode.com/problems/maximum-product-difference-between-two-pairs
 */
export function maxProductDifference(nums: number[]): number {
  let [max1, max2] = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
  let [min1, min2] = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];

  nums.forEach((num) => {
    if (max1 < num) {
      [max1, max2] = [num, max1];
    } else if (max2 < num) {
      max2 = num;
    }

    if (min1 > num) {
      [min1, min2] = [num, min1];
    } else if (min2 > num) {
      min2 = num;
    }
  });

  return max1 * max2 - min1 * min2;
}
