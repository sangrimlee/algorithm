/**
 * 3178. Find the Child Who Has the Ball After K Seconds
 * https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds
 */
export function numberOfChild(n: number, k: number): number {
  const rounds = 2 * (n - 1);
  const remain = k % rounds;
  return remain < n ? remain : rounds - remain;
}
