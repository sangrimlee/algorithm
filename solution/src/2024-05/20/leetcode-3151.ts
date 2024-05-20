/**
 * 3151. Special Array I
 * https://leetcode.com/problems/special-array-i
 */
export function isArraySpecial(nums: number[]): boolean {
  for (let i = 1; i < nums.length; i++) {
    if ((nums[i - 1] + nums[i]) % 2 === 0) {
      return false;
    }
  }
  return true;
}
