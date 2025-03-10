/**
 * 1281. Subtract the Product and Sum of Digits of an Integer
 * https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer
 */
export function subtractProductAndSum(n: number): number {
  const product = (acc: number, num: number) => acc * num;
  const sum = (acc: number, num: number) => acc + num;

  const digits = n
    .toString()
    .split('')
    .map((v) => +v);
  return digits.reduce(product, 1) - digits.reduce(sum, 0);
}
