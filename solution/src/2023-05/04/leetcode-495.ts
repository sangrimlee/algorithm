/**
 * 495. Teemo Attacking
 * https://leetcode.com/problems/teemo-attacking
 */
export function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let totalTime = 0;
  let currentTime = 0;

  for (const startTime of timeSeries) {
    const endTime = startTime + duration;
    totalTime += endTime - Math.max(currentTime, startTime);
    currentTime = endTime;
  }

  return totalTime;
}
