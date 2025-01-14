/**
 * 3417. Zigzag Grid Traversal With Skip
 * https://leetcode.com/problems/zigzag-grid-traversal-with-skip
 */
export function zigzagTraversal(grid: number[][]): number[] {
  return grid.flatMap((row, y) => {
    const nums = row.filter((_, x) => y % 2 === x % 2);
    return y % 2 === 0 ? nums : nums.reverse();
  });
}
