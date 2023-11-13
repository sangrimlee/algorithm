/**
 * 1037. Valid Boomerang
 * https://leetcode.com/problems/valid-boomerang
 */
export function isBoomerang([[x1, y1], [x2, y2], [x3, y3]]: number[][]): boolean {
  return (y1 - y2) * (x1 - x3) !== (y1 - y3) * (x1 - x2);
}
