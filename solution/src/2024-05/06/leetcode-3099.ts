/**
 * 3099. Harshad Number
 * https://leetcode.com/problems/harshad-number
 */
export function sumOfTheDigitsOfHarshadNumber(x: number): number {
  const sum = sumDigits(x);
  return x % sum === 0 ? sum : -1;
}

function sumDigits(num: number) {
  let sum = 0;
  while (0 < num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
