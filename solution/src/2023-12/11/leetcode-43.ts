/**
 * 43. Multiply Strings
 * https://leetcode.com/problems/multiply-strings
 */
export function multiply(num1: string, num2: string): string {
  const [m, n] = [num1.length, num2.length];

  const result = new Array(m + n).fill(0);
  for (let i = m - 1; 0 <= i; i--) {
    for (let j = n - 1; 0 <= j; j--) {
      const multiply = parseInt(num1[i]) * parseInt(num2[j]);
      const sum = multiply + result[i + j + 1];
      result[i + j] += Math.floor(sum / 10);
      result[i + j + 1] = sum % 10;
    }
  }
  const answer = result.reduce(
    (prev, curr) => (prev === '' && curr === 0 ? prev : `${prev}${curr}`),
    '',
  );
  return answer.length === 0 ? '0' : answer;
}
