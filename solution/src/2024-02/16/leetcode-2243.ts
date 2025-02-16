/**
 * 2243. Calculate Digit Sum of a String
 * https://leetcode.com/problems/calculate-digit-sum-of-a-string
 */
export function digitSum(s: string, k: number): string {
  if (s.length <= k) {
    return s;
  }
  let result = '';
  for (let i = 0; i < s.length; i += k) {
    const substr = s.substring(i, i + k);
    const sum = substr.split('').reduce((acc, c) => acc + parseInt(c), 0);
    result += sum.toString();
  }
  return digitSum(result, k);
}
