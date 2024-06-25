/**
 * 3184. Count Pairs That Form a Complete Day I
 * https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i
 */
export function countCompleteDayPairs(hours: number[]): number {
  let answer = 0;
  const counter = new Map<number, number>();
  for (const hour of hours) {
    const remainder = hour % 24;
    answer += counter.get((24 - remainder) % 24) ?? 0;
    counter.set(remainder, (counter.get(remainder) ?? 0) + 1);
  }
  return answer;
}
