/**
 * 168. Excel Sheet Column Title
 * https://leetcode.com/problems/excel-sheet-column-title
 */
/**
 * Time Complexity: O(log26(n))
 * Space Complexity: O(1)
 */
export function convertToTitle(columnNumber: number): string {
  let answer = '';
  let currentNumber = columnNumber;
  while (0 < currentNumber) {
    currentNumber -= 1;
    answer = String.fromCharCode((currentNumber % 26) + 65) + answer;
    currentNumber = Math.floor(currentNumber / 26);
  }
  return answer;
}
