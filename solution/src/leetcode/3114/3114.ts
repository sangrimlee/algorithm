/**
 * 3114. Latest Time You Can Obtain After Replacing Characters
 * https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters
 */
export function findLatestTime(s: string): string {
  const t = s.split('');
  t[0] = t[0] === '?' ? (t[1] === '?' || t[1] <= '1' ? '1' : '0') : t[0];
  t[1] = t[1] === '?' ? (t[0] === '1' ? '1' : '9') : t[1];
  t[3] = t[3] === '?' ? '5' : t[3];
  t[4] = t[4] === '?' ? '9' : t[4];
  return t.join('');
}
