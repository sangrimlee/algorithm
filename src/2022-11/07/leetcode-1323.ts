/**
 * 1323. Maximum 69 Number
 * https://leetcode.com/problems/maximum-69-number/
 */
export function maximum69Number(num: number): number {
  return parseInt(num.toString().replace(/6/, '9'));
}
