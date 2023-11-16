/**
 * 1980. Find Unique Binary String
 * https://leetcode.com/problems/find-unique-binary-string
 */
export function findDifferentBinaryString(nums: string[]): string {
  const not = (bit: string) => (bit === '0' ? '1' : '0');
  return nums.reduce((answer, num, i) => answer + not(num[i]), '');
}
