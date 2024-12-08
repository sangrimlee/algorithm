/**
 * 2054. Two Best Non-Overlapping Events
 * https://leetcode.com/problems/two-best-non-overlapping-events
 */
export function maxTwoEvents(events: number[][]): number {
  const times: number[][] = [];
  for (const [startTime, endTime, value] of events) {
    times.push([startTime, 1, value]);
    times.push([endTime + 1, 0, value]);
  }
  times.sort(sortArr);

  let answer = 0;
  let maxValue = 0;
  for (const [, isStart, value] of times) {
    if (isStart === 1) {
      answer = Math.max(answer, value + maxValue);
    } else {
      maxValue = Math.max(maxValue, value);
    }
  }
  return answer;
}

function sortArr(arr1: number[], arr2: number[]): number {
  const [m, n] = [arr1.length, arr2.length];
  for (let i = 0; i < Math.min(m, n); i++) {
    if (arr1[i] !== arr2[i]) {
      return arr1[i] - arr2[i];
    }
  }
  return m - n;
}
