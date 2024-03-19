/**
 * 621. Task Scheduler
 * https://leetcode.com/problems/task-scheduler
 */
export function leastInterval(tasks: string[], n: number): number {
  const taskCounter = new Map<string, number>();

  let maxTasks = 0;
  let maxTaskCount = 0;
  for (const task of tasks) {
    const taskCount = (taskCounter.get(task) ?? 0) + 1;
    taskCounter.set(task, taskCount);
    if (taskCount > maxTaskCount) {
      maxTaskCount = taskCount;
      maxTasks = 1;
    } else if (taskCount === maxTaskCount) {
      maxTasks += 1;
    }
  }

  return Math.max(tasks.length, (maxTaskCount - 1) * (n + 1) + maxTasks);
}
