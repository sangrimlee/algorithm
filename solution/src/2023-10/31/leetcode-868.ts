/**
 * 868. Binary Gap
 * https://leetcode.com/problems/binary-gap
 */
export function binaryGap(n: number): number {
  let answer = 0;

  let num = n;
  let lastIndex = -1;
  let currentIndex = 0;
  while (0 < num) {
    if ((num & 1) === 1) {
      if (0 <= lastIndex) {
        answer = Math.max(answer, currentIndex - lastIndex);
      }
      lastIndex = currentIndex;
    }
    num >>= 1;
    currentIndex += 1;
  }

  return answer;
}
