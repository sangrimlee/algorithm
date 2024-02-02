/**
 * 1291. Sequential Digits
 * https://leetcode.com/problems/sequential-digits
 */
export function sequentialDigits(low: number, high: number): number[] {
  const answer: number[] = [];

  for (let digit = 1; digit <= 9; digit++) {
    let num = digit;
    let nextDigit = digit + 1;
    while (num <= high && nextDigit <= 9) {
      num = num * 10 + nextDigit;
      if (low <= num && num <= high) {
        answer.push(num);
      }
      nextDigit += 1;
    }
  }

  return answer.sort((a, b) => a - b);
}
