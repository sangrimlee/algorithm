/**
 * 2614. Prime In Diagonal
 * https://leetcode.com/problems/prime-in-diagonal
 */
export function diagonalPrime(nums: number[][]): number {
  function isPrime(num: number) {
    if (num <= 1) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  const n = nums.length;
  let answer = 0;
  for (let i = 0; i < n; i++) {
    if (isPrime(nums[i][i])) {
      answer = Math.max(answer, nums[i][i]);
    }
    if (isPrime(nums[i][n - i - 1])) {
      answer = Math.max(answer, nums[i][n - i - 1]);
    }
  }
  return answer;
}
