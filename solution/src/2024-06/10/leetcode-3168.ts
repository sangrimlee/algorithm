/**
 * 3168. Minimum Number of Chairs in a Waiting Room
 * https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room
 */
export function minimumChairs(s: string): number {
  let answer = 0;
  let chairs = 0;
  for (const char of s) {
    chairs += char === 'E' ? 1 : -1;
    answer = Math.max(answer, chairs);
  }
  return answer;
}
