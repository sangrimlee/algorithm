/**
 * 1137. N-th Tribonacci Number
 * https://leetcode.com/problems/n-th-tribonacci-number
 */
export function tribonacci(n: number): number {
  if (n <= 2) {
    return Math.ceil(n / 2);
  }

  let [first, second, third] = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    const sum = first + second + third;
    [first, second, third] = [second, third, sum];
  }

  return third;
}
