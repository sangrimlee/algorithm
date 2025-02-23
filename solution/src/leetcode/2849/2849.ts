/**
 * 2849. Determine if a Cell Is Reachable at a Given Time
 * https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time
 */
export function isReachableAtTime(
  sx: number,
  sy: number,
  fx: number,
  fy: number,
  t: number,
): boolean {
  if (sx === fx && sy === fy && t === 1) {
    return false;
  }

  return Math.max(Math.abs(sx - fx), Math.abs(sy - fy)) <= t;
}
