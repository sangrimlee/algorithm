/**
 * 2044. Count Number of Maximum Bitwise-OR Subsets
 * https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets
 */
export function countMaxOrSubsets(nums: number[]): number {
  const maxOr = nums.reduce((prev, num) => prev | num, 0);

  function dfs(i: number, or: number): number {
    if (i === nums.length) {
      return or === maxOr ? 1 : 0;
    }
    return dfs(i + 1, or) + dfs(i + 1, or | nums[i]);
  }

  return dfs(0, 0);
}
