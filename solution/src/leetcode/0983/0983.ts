/**
 * 983. Minimum Cost For Tickets
 * https://leetcode.com/problems/minimum-cost-for-tickets
 */
export function mincostTickets(days: number[], costs: number[]): number {
  const daysSet = new Set(days);
  const n = days[days.length - 1] + 1;
  const dp = new Array<number>(n).fill(0);

  const durations = [1, 7, 30];

  for (let day = 1; day < n; day++) {
    if (daysSet.has(day)) {
      dp[day] = Math.min(...costs.map((cost, i) => (dp[day - durations[i]] ?? 0) + cost));
    } else {
      dp[day] = dp[day - 1];
    }
  }
  return dp[n - 1];
}
