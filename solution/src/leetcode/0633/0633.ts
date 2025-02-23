/**
 * 633. Sum of Square Numbers
 * https://leetcode.com/problems/sum-of-square-numbers
 */
export function judgeSquareSum(c: number): boolean {
  let [start, end] = [0, Math.floor(Math.sqrt(c))];
  while (start <= end) {
    const num = start ** 2 + end ** 2;
    if (num === c) {
      return true;
    }
    if (num < c) {
      start += 1;
    } else {
      end -= 1;
    }
  }
  return false;
}
