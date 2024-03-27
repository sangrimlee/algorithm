/**
 * 713. Subarray Product Less Than K
 * https://leetcode.com/problems/subarray-product-less-than-k
 */
export function numSubarrayProductLessThanK(nums: number[], k: number): number {
  if (k <= 1) {
    return 0;
  }

  let answer = 0;
  let left = 0;
  let product = 1;
  nums.forEach((num, right) => {
    product *= num;
    while (k <= product) {
      product = Math.floor(product / nums[left]);
      left += 1;
    }
    answer += right - left + 1;
  });

  return answer;
}
