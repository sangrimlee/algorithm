/**
 * 2511. Maximum Enemy Forts That Can Be Captured
 * https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured
 */
export function captureForts(forts: number[]): number {
  let answer = 0;
  let prevIndex = 0;
  for (let i = 0; i < forts.length; i++) {
    if (forts[i] === 0) continue;
    if (-forts[i] === forts[prevIndex]) {
      answer = Math.max(answer, i - prevIndex - 1);
    }
    prevIndex = i;
  }
  return answer;
}
