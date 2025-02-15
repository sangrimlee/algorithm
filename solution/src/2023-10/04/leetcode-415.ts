/**
 * 415. Add Strings
 * https://leetcode.com/problems/add-strings
 */
export function addStrings(num1: string, num2: string): string {
  const maxLength = Math.max(num1.length, num2.length);
  const numString1 = num1.padStart(maxLength, '0');
  const numString2 = num2.padStart(maxLength, '0');

  let answer = '';
  let carry = 0;
  for (let i = maxLength - 1; 0 <= i; i--) {
    const sum = parseInt(numString1[i], 10) + parseInt(numString2[i], 10) + carry;
    answer = `${(sum % 10).toString()}${answer}`;
    carry = Math.floor(sum / 10);
  }

  return carry === 0 ? answer : `${carry.toString()}${answer}`;
}
