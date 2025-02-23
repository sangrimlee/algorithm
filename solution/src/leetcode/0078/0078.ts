/**
 * 78. Subsets
 * https://leetcode.com/problems/subsets
 */
export function subsets(nums: number[]): number[][] {
  const n = nums.length;
  const answer: number[][] = [];

  function dfs(currentIndex: number, subset: number[]) {
    if (n <= currentIndex) {
      answer.push([...subset]);
      return;
    }
    subset.push(nums[currentIndex]);
    dfs(currentIndex + 1, subset);
    subset.pop();
    dfs(currentIndex + 1, subset);
  }

  dfs(0, []);
  return answer;
}
