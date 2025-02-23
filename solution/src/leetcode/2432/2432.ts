/**
 * 2432. The Employee That Worked on the Longest Task
 * https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task
 */
export function hardestWorker(n: number, logs: number[][]): number {
  let answer = 0;
  let [endTime, maxTime] = [0, 0];
  for (const [id, leaveTime] of logs) {
    if (maxTime <= leaveTime - endTime) {
      answer = maxTime < leaveTime - endTime ? id : Math.min(answer, id);
      maxTime = leaveTime - endTime;
    }
    endTime = leaveTime;
  }

  return answer;
}
