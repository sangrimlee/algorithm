/**
 * 90. Subsets II
 * https://leetcode.com/problems/subsets-ii
 */
export function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);

  const subsets: number[][] = [];
  function backtrack(current: number[], startIndex: number) {
    subsets.push([...current]);
    for (let i = startIndex; i < nums.length; i++) {
      if (startIndex < i && nums[i - 1] === nums[i]) {
        continue;
      }
      current.push(nums[i]);
      backtrack(current, i + 1);
      current.pop();
    }
  }
  backtrack([], 0);
  return subsets;
}
