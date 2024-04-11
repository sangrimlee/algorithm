/**
 * 2833. Furthest Point From Origin
 * https://leetcode.com/problems/furthest-point-from-origin
 */
export function furthestDistanceFromOrigin(moves: string): number {
  let left = 0;
  let right = 0;
  let both = 0;
  for (const move of moves) {
    if (move === 'L') {
      left += 1;
    } else if (move === 'R') {
      right += 1;
    } else {
      both += 1;
    }
  }

  return Math.abs(left - right) + both;
}
