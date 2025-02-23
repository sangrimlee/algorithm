/**
 * 2496. Maximum Value of a String in an Array
 * https://leetcode.com/problems/maximum-value-of-a-string-in-an-array
 */
export function maximumValue(strs: string[]): number {
  function getValue(str: string) {
    return /^\d+$/.test(str) ? parseInt(str) : str.length;
  }
  return strs.reduce((prev, str) => Math.max(prev, getValue(str)), 0);
}
