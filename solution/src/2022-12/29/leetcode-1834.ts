import { Heap } from '@algorithm/lib';

/**
 * 1834. Single-Threaded CPU
 * https://leetcode.com/problems/single-threaded-cpu
 */
export function getOrder(tasks: number[][]): number[] {
  const scheduled = tasks
    .map(([enqueueTime, processingTime], i) => [enqueueTime, processingTime, i])
    .sort((a, b) => (a[0] !== b[0] ? b[0] - a[0] : b[1] - a[1]));

  const answer: number[] = [];
  const queue = new Heap<[number, number]>((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));

  let currentTime = 0;
  while (0 < scheduled.length || !queue.isEmpty) {
    if (queue.isEmpty && currentTime < scheduled[scheduled.length - 1][0]) {
      currentTime = scheduled[scheduled.length - 1][0];
    }

    while (0 < scheduled.length && scheduled[scheduled.length - 1][0] <= currentTime) {
      const lastScheduled = scheduled.pop();
      if (lastScheduled) {
        const [, processingTime, i] = lastScheduled;
        queue.push([processingTime, i]);
      }
    }

    const lastQueue = queue.pop();
    if (lastQueue) {
      const [processingTime, i] = lastQueue;
      currentTime += processingTime;
      answer.push(i);
    }
  }

  return answer;
}
