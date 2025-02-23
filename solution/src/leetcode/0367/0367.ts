/**
 * 367. Valid Perfect Square
 * https://leetcode.com/problems/valid-perfect-square
 */
export function isPerfectSquare(num: number): boolean {
  let r = num;
  while (num < r * r) {
    r = Math.floor((r + num / r) / 2);
  }
  return r * r === num;
}
