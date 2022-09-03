const MAX_NUMBER = 2 ** 31 - 1;
const MIN_NUMBER = -(2 ** 31);

const BLANK = '';
const NUMBER_WITH_WHITE_SPACE = /([\d-+]) +(\d*)/g;
const WHITE_SPACE = / /g;

function clamp(num: number) {
  return Math.max(Math.min(MAX_NUMBER, num), MIN_NUMBER);
}

function removeWhiteSpaces(s: string) {
  return s
    .replace(NUMBER_WITH_WHITE_SPACE, '$1_$2')
    .replace(WHITE_SPACE, BLANK);
}

function convert(s: string) {
  const regex = /^([+-]{0,1}\d+)/;
  const result = regex.exec(s);
  if (result === null) {
    return 0;
  }
  const num = parseInt(result[0]);
  return num;
}

/**
 * 8. String to Integer (atoi)
 * https://leetcode.com/problems/string-to-integer-atoi/submissions/
 */
export function myAtoi(s: string): number {
  return clamp(convert(removeWhiteSpaces(s)));
}
