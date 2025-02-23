/**
 * 3280. Convert Date to Binary
 * https://leetcode.com/problems/convert-date-to-binary
 */
export function convertDateToBinary(date: string): string {
  return date
    .split('-')
    .map((v) => parseInt(v).toString(2))
    .join('-');
}
