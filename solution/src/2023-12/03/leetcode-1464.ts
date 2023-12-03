/**
 * 1464. Maximum Product of Two Elements in an Array
 * https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array
 */
export function maxProduct(nums: number[]): number {
  const MIN_VALUE = Number.MIN_SAFE_INTEGER;
  let [first, second] = [MIN_VALUE, MIN_VALUE];
  nums.forEach((num) => {
    if (first < num) {
      [first, second] = [num, first];
    } else if (second < num) {
      second = num;
    }
  });
  return (first - 1) * (second - 1);
}
