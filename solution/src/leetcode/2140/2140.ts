/**
 * 2140. Solving Questions With Brainpower
 * https://leetcode.com/problems/solving-questions-with-brainpower
 */
export function mostPoints(questions: number[][]): number {
  const n = questions.length;
  const dp = new Array<number>(n + 1).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    const [points, brainpower] = questions[i];
    dp[i] = Math.max(points + dp[Math.min(n, brainpower + i + 1)], dp[i + 1]);
  }
  return dp[0];
}
