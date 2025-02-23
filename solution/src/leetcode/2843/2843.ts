/**
 * 2843. Count Symmetric Integers
 * https://leetcode.com/problems/count-symmetric-integers
 */
export function countSymmetricIntegers(low: number, high: number): number {
  function isSymmetric(num: number) {
    const str = num.toString();
    const n = str.length;
    if (n % 2 !== 0) {
      return false;
    }
    let [leftSum, rightSum] = [0, 0];
    for (let i = 0; i < Math.floor(n / 2); i++) {
      leftSum += parseInt(str[i]);
      rightSum += parseInt(str[n - i - 1]);
    }
    return leftSum === rightSum;
  }

  let answer = 0;
  for (let num = low; num <= high; num++) {
    if (isSymmetric(num)) {
      answer += 1;
    }
  }
  return answer;
}
