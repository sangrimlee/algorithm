/**
 * 2186. Minimum Number of Steps to Make Two Strings Anagram II
 * https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii
 */
export function minSteps(s: string, t: string): number {
  let answer = 0;
  const sCounter = createCharCounter(s);
  const tCounter = createCharCounter(t);
  for (let i = 0; i < 26; i++) {
    answer += Math.abs(sCounter[i] - tCounter[i]);
  }
  return answer;
}

function createCharCounter(str: string): number[] {
  const counter = new Array<number>(26).fill(0);
  for (const char of str) {
    const charCode = char.charCodeAt(0) - 'a'.charCodeAt(0);
    counter[charCode] += 1;
  }
  return counter;
}
