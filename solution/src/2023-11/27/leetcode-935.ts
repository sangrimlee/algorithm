/**
 * 935. Knight Dialer
 * https://leetcode.com/problems/knight-dialer
 */
export function knightDialer(n: number): number {
  const MOD = 10 ** 9 + 7;
  const graph = [[4, 6], [6, 8], [7, 9], [4, 8], [0, 3, 9], [], [0, 1, 7], [2, 6], [1, 3], [2, 4]];

  let prev = new Array(10).fill(1);
  for (let i = 2; i <= n; i++) {
    const current = new Array(10).fill(0);
    for (let num = 0; num < 10; num++) {
      for (const nextNum of graph[num]) {
        current[nextNum] += prev[num] % MOD;
      }
    }
    prev = current;
  }

  return prev.reduce((acc, num) => (acc + num) % MOD, 0);
}
