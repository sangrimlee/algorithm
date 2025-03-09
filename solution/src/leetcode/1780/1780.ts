/**
 * 1780. Check if Number is a Sum of Powers of Three
 * https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/
 */
export function checkPowersOfThree(n: number): boolean {
  while (n > 0) {
    if (n % 3 === 2) {
      return false;
    }
    n = Math.floor(n / 3);
  }
  return true;
}
