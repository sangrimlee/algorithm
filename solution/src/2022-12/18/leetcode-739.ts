import { range } from '@algorithm/lib';

/**
 * 739. Daily Temperatures
 * https://leetcode.com/problems/daily-temperatures
 */
export function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;

  const stack: number[] = [];
  const answer = new Array<number>(n).fill(0);

  for (const day of range(n)) {
    while (0 < stack.length && temperatures[stack[stack.length - 1]] < temperatures[day]) {
      const lastDay = stack.pop();
      if (lastDay !== undefined) {
        answer[lastDay] = day - lastDay;
      }
    }
    stack.push(day);
  }

  return answer;
}
