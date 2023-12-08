/**
 * 39. Combination Sum
 * https://leetcode.com/problems/combination-sum
 */
export function combinationSum(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);

  const result: number[][] = [];
  const dfs = (path: number[], sum: number, lastCandidate: number) => {
    if (sum === target) {
      result.push([...path]);
      return;
    }
    for (let i = lastCandidate; i < candidates.length; i++) {
      const candidate = candidates[i];
      if (sum + candidate <= target) {
        path.push(candidate);
        dfs(path, sum + candidate, i);
        path.pop();
      }
    }
  };

  dfs([], 0, 0);
  return result;
}
