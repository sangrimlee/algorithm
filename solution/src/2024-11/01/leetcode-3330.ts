/**
 * 3330. Find the Original Typed String I
 * https://leetcode.com/problems/find-the-original-typed-string-i
 */
export function possibleStringCount(word: string): number {
  let answer = 1;
  for (let i = 1; i < word.length; i++) {
    if (word[i - 1] === word[i]) {
      answer += 1;
    }
  }
  return answer;
}
