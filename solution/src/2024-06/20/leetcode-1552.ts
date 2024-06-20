/**
 * 1552. Magnetic Force Between Two Balls
 * https://leetcode.com/problems/magnetic-force-between-two-balls
 */
export function maxDistance(position: number[], m: number): number {
  const n = position.length;
  position.sort((a, b) => a - b);

  function countBasket(distance: number) {
    let result = 1;
    let curr = position[0];
    for (let i = 1; i < n; i++) {
      if (distance <= position[i] - curr) {
        result += 1;
        curr = position[i];
      }
    }
    return result;
  }

  let [left, right] = [0, position[n - 1] - position[0]];
  while (left < right) {
    const mid = right - Math.floor((right - left) / 2);
    if (m <= countBasket(mid)) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return left;
}
