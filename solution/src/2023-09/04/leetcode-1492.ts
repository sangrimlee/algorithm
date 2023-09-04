/**
 * 1492. The kth Factor of n
 * https://leetcode.com/problems/the-kth-factor-of-n
 */
export function kthFactor(n: number, k: number): number {
  let currentIndex = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      currentIndex += 1;
    }
    if (currentIndex === k) {
      return i;
    }
  }
  return -1;
}
