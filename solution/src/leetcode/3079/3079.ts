/**
 * 3079. Find the Sum of Encrypted Integers
 * https://leetcode.com/problems/find-the-sum-of-encrypted-integers
 */
export function sumOfEncryptedInt(nums: number[]): number {
  return nums.reduce((acc, num) => acc + encrypt(num), 0);
}

function encrypt(num: number): number {
  let multiply = 0;
  let maxDigit = 0;
  while (0 < num) {
    multiply = multiply * 10 + 1;
    maxDigit = Math.max(maxDigit, num % 10);
    num = Math.floor(num / 10);
  }
  return maxDigit * multiply;
}
