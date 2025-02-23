/**
 * 1974. Minimum Time to Type Word Using Special Typewriter
 * https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter
 */
export function minTimeToType(word: string): number {
  function getCharPoint(char: string) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
  }

  function getMoveTime(start: number, end: number) {
    return Math.min((end - start + 26) % 26, (start - end + 26) % 26);
  }

  let answer = 0;
  let currPoint = 0;
  for (const char of word) {
    const nextPoint = getCharPoint(char);
    answer += getMoveTime(currPoint, nextPoint) + 1;
    currPoint = nextPoint;
  }
  return answer;
}
