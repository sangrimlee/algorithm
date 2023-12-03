/**
 * 1450. Number of Students Doing Homework at a Given Time
 * https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time
 */
export function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
  return startTime.filter((start, i) => start <= queryTime && queryTime <= endTime[i]).length;
}
