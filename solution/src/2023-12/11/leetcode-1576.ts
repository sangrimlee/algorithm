/**
 * 1576. Replace All ?'s to Avoid Consecutive Repeating Characters
 * https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters
 */
export function modifyString(s: string): string {
  const n = s.length;
  const arr = [...s];
  const replacables = ['a', 'b', 'c'];
  for (let i = 0; i < n; i++) {
    if (arr[i] !== '?') continue;
    arr[i] = replacables.find((r) => r !== arr[i - 1] && r !== arr[i + 1])!;
  }
  return arr.join('');
}
