/**
 * 2140. Solving Questions With Brainpower
 * https://leetcode.com/problems/solving-questions-with-brainpower
 */
export function mostPoints(questions: number[][]): number {
  const n = questions.length;
  const dp = new Array<number>(n).fill(0);

  const dfs = (i: number) => {
    if (n <= i) {
      return 0;
    }
    if (dp[i] !== 0) {
      return dp[i];
    }
    const [point, brainPower] = questions[i];
    dp[i] = Math.max(dfs(i + 1), point + dfs(i + brainPower + 1));
    return dp[i];
  };

  return dfs(0);
}
