/**
 * 899. Orderly Queue
 * https://leetcode.com/problems/orderly-queue/
 */
export function orderlyQueue(s: string, k: number): string {
  if (k !== 1) {
    return s.split('').sort().join('');
  }

  const n = s.length;
  let answer = s;
  for (let i = 1; i < n; i++) {
    const curr = s.substring(i) + s.substring(0, i);
    if (curr < answer) {
      answer = curr;
    }
  }
  return answer;
}
