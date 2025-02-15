/**
 * 3345. Smallest Divisible Digit Product I
 * https://leetcode.com/problems/smallest-divisible-digit-product-i
 */
export function smallestNumber(n: number, t: number): number {
  let curr = n;
  while (productDigits(curr) % t !== 0) {
    curr += 1;
  }
  return curr;
}

function productDigits(num: number) {
  return num
    .toString()
    .split('')
    .reduce((acc, digit) => acc * +digit, 1);
}
