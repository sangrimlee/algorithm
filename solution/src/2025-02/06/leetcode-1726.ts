/**
 * 1726. Tuple with Same Product
 * https://leetcode.com/problems/tuple-with-same-product
 */
export function tupleSameProduct(nums: number[]): number {
  const n = nums.length;
  const productCounts = new Map<number, number>();

  let answer = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const product = nums[i] * nums[j];
      const count = productCounts.get(product) ?? 0;
      productCounts.set(product, count + 1);
      answer += 8 * count;
    }
  }
  return answer;
}
