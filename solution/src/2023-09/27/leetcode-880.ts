/**
 * 880. Decoded String at Index
 * https://leetcode.com/problems/decoded-string-at-index
 */
export function decodeAtIndex(s: string, k: number): string {
  let currentLength = 0;

  for (const char of s) {
    const num = parseInt(char, 10);
    if (Number.isNaN(num)) {
      currentLength += 1;
    } else {
      currentLength *= num;
    }
  }

  let targetIndex = k;
  for (let i = s.length - 1; 0 <= i; i--) {
    const char = s[i];
    const num = parseInt(char, 10);

    if (Number.isNaN(num)) {
      if (targetIndex === 0 || targetIndex === currentLength) {
        return char;
      }
      currentLength -= 1;
    } else {
      currentLength = Math.ceil(currentLength / num);
      targetIndex %= currentLength;
    }
  }

  throw new Error('잘못된 테스트 케이스입니다.');
}
