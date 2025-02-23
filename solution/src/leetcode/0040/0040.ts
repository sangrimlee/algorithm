/**
 * 40. Combination Sum II
 * https://leetcode.com/problems/combination-sum-ii
 */
export function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);

  const result: number[][] = [];
  const dfs = (path: number[], sum: number, lastCandidate: number) => {
    if (target < sum) return;
    if (sum === target) {
      result.push([...path]);
      return;
    }
    for (let i = lastCandidate; i < candidates.length; i++) {
      const candidate = candidates[i];
      if (lastCandidate < i && candidates[i] === candidates[i - 1]) {
        continue;
      }
      path.push(candidate);
      dfs(path, sum + candidate, i + 1);
      path.pop();
    }
  };

  dfs([], 0, 0);
  return result;
}
