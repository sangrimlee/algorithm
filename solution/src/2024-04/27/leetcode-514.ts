/**
 * 514. Freedom Trail
 * https://leetcode.com/problems/freedom-trail
 */
export function findRotateSteps(ring: string, key: string): number {
  const [m, n] = [ring.length, key.length];

  let prev = new Array<number>(m).fill(0);
  for (let j = n - 1; 0 <= j; j--) {
    const curr = new Array<number>(m).fill(Number.MAX_SAFE_INTEGER);
    for (let i = 0; i < m; i++) {
      for (let k = 0; k < m; k++) {
        if (ring[k] === key[j]) {
          const diff = Math.abs(i - k);
          const step = Math.min(diff, m - diff);
          curr[i] = Math.min(curr[i], step + prev[k] + 1);
        }
      }
    }
    prev = curr;
  }

  return prev[0];
}
