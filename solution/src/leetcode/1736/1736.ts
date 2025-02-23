/**
 * 1736. Latest Time by Replacing Hidden Digits
 * https://leetcode.com/problems/latest-time-by-replacing-hidden-digits
 */
export function maximumTime(time: string): string {
  const times = time.split('');
  if (times[0] === '?') {
    times[0] = times[1] === '?' || times[1] <= '3' ? '2' : '1';
  }
  if (times[1] === '?') {
    times[1] = times[0] === '2' ? '3' : '9';
  }
  if (times[3] === '?') {
    times[3] = '5';
  }
  if (times[4] === '?') {
    times[4] = '9';
  }
  return times.join('');
}
