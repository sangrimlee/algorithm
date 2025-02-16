/**
 * 2244. Minimum Rounds to Complete All Tasks
 * https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks
 */
export function minimumRounds(tasks: number[]): number {
  const counts = new Map<number, number>();
  for (const task of tasks) {
    counts.set(task, (counts.get(task) ?? 0) + 1);
  }

  let minimumRound = 0;
  for (const count of counts.values()) {
    if (count === 1) {
      return -1;
    }
    minimumRound += Math.floor((count + 2) / 3);
  }

  return minimumRound;
}
