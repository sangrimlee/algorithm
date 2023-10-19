/**
 * 844. Backspace String Compare
 * https://leetcode.com/problems/backspace-string-compare
 */
export function backspaceCompare(s: string, t: string): boolean {
  const buildString = (s: string) => {
    let result = '';

    let skipCount = 0;
    let currentIndex = s.length - 1;
    while (0 <= currentIndex) {
      if (s[currentIndex] === '#') {
        skipCount += 1;
      } else if (skipCount === 0) {
        result = s[currentIndex] + result;
      } else {
        skipCount -= 1;
      }
      currentIndex -= 1;
    }
    return result;
  };

  return buildString(s) === buildString(t);
}
