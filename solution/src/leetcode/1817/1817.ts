/**
 * 1817. Finding the Users Active Minutes
 * https://leetcode.com/problems/finding-the-users-active-minutes
 */
export function findingUsersActiveMinutes(logs: number[][], k: number): number[] {
  const logById = new Map<number, Set<number>>();
  for (const [id, time] of logs) {
    const log = logById.get(id) ?? new Set();
    log.add(time);
    logById.set(id, log);
  }

  const answer = new Array<number>(k).fill(0);
  for (const log of logById.values()) {
    const uam = log.size;
    answer[uam - 1] += 1;
  }
  return answer;
}
