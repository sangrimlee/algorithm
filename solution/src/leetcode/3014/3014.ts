/**
 * 3014. Minimum Number of Pushes to Type Word I
 * https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i
 */
export function minimumPushes(word: string): number {
  let answer = 0;
  for (let i = 0; i < word.length; i++) {
    answer += Math.floor(i / 8) + 1;
  }
  return answer;
}
