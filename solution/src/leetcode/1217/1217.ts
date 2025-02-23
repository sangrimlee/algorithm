/**
 * 1217. Minimum Cost to Move Chips to The Same Position
 * https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position
 */
export function minCostToMoveChips(position: number[]): number {
  const n = position.length;
  const even = position.reduce((prev, chip) => (chip % 2 ? prev + 1 : prev), 0);
  return Math.min(even, n - even);
}
