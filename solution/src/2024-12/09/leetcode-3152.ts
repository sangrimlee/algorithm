/**
 * 3152. Special Array II
 * https://leetcode.com/problems/special-array-ii
 */
export function isArraySpecial(nums: number[], queries: number[][]): boolean[] {
  const prefix: number[] = new Array(nums.length).fill(0);
  for (let i = 1; i < nums.length; i++) {
    prefix[i] = prefix[i - 1] + (nums[i - 1] % 2 === nums[i] % 2 ? 1 : 0);
  }
  return queries.map(([from, to]) => prefix[from] === prefix[to]);
}
