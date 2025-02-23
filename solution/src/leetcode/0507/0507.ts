/**
 * 507. Perfect Number
 * https://leetcode.com/problems/perfect-number
 */
export function checkPerfectNumber(num: number): boolean {
  if (num === 1) {
    return false;
  }

  const sqrtNum = Math.sqrt(num);

  let sumOfDivisor = 1;
  for (let divisor = 2; divisor <= sqrtNum; divisor++) {
    if (num % divisor === 0) {
      sumOfDivisor += divisor === sqrtNum ? divisor : divisor + num / divisor;
    }
  }
  return sumOfDivisor === num;
}
