/**
 * 2437. Number of Valid Clock Times
 * https://leetcode.com/problems/number-of-valid-clock-times
 */
export function countTime(time: string): number {
  function getHour(hour: string) {
    if (hour.startsWith('?')) {
      return hour[1] === '?' ? 24 : hour[1] < '4' ? 3 : 2;
    }
    if (hour[1] === '?') {
      return hour[0] < '2' ? 10 : 4;
    }
    return 1;
  }

  function getMinute(minute: string) {
    if (minute.startsWith('?')) {
      return minute[1] === '?' ? 60 : 6;
    }
    return minute[1] === '?' ? 10 : 1;
  }

  const [hour, minute] = time.split(':');
  return getHour(hour) * getMinute(minute);
}
