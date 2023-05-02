/**
 * 1822. Sign of the Product of an Array
 * https://leetcode.com/problems/sign-of-the-product-of-an-array
 */
export function arraySign(nums: number[]): number {
  const sign = (num: number) => {
    return num === 0 ? 0 : Math.sign(num);
  };

  return sign(nums.reduce((prev, curr) => prev * sign(curr), 1));
}
