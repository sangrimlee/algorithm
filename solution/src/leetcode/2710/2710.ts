/**
 * 2710. Remove Trailing Zeros From a String
 * https://leetcode.com/problems/remove-trailing-zeros-from-a-string
 */
export function removeTrailingZeros(num: string): string {
  return num.replace(/0+$/, '');
}
