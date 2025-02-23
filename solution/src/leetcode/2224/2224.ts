/**
 * 2224. Minimum Number of Operations to Convert Time
 * https://leetcode.com/problems/minimum-number-of-operations-to-convert-time
 */
export function convertTime(current: string, correct: string): number {
  function toMinutes(time: string) {
    const [hour, minute] = time.split(':');
    return parseInt(hour) * 60 + parseInt(minute);
  }

  let answer = 0;
  let diff = toMinutes(correct) - toMinutes(current);
  for (const unit of [60, 15, 5, 1]) {
    answer += Math.floor(diff / unit);
    diff %= unit;
  }
  return answer;
}
