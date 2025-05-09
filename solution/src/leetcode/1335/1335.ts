/**
 * 1335. Minimum Difficulty of a Job Schedule
 * https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule
 */
export function minDifficulty(jobDifficulty: number[], d: number): number {
  const n = jobDifficulty.length;
  if (n < d) {
    return -1;
  }

  const dp = new Array<number>(n + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[n] = 0;
  for (let day = 1; day <= d; day++) {
    for (let i = 0; i <= n - day; i++) {
      let maxDifficulty = 0;
      dp[i] = Number.MAX_SAFE_INTEGER;
      for (let j = i; j <= n - day; j++) {
        maxDifficulty = Math.max(maxDifficulty, jobDifficulty[j]);
        dp[i] = Math.min(dp[i], maxDifficulty + dp[j + 1]);
      }
    }
  }
  return dp[0];
}
