/**
 * 179. Largest Number
 * https://leetcode.com/problems/largest-number
 */
export function largestNumber(nums: number[]): string {
  return nums
    .sort((a, b) => (join(a, b) > join(b, a) ? -1 : 1))
    .join('')
    .replace(/^0+/, '0');
}

function join(...nums: number[]): string {
  return nums.join('');
}
