/**
 * 1289. Minimum Falling Path Sum II
 * https://leetcode.com/problems/minimum-falling-path-sum-ii
 */
export function minFallingPathSum(grid: number[][]): number {
  const initialState = {
    first: Number.MAX_SAFE_INTEGER,
    firstColumn: -1,
    second: Number.MAX_SAFE_INTEGER,
  };

  let prev = { first: 0, firstColumn: -1, second: 0 };
  grid.forEach((row) => {
    const curr = { ...initialState };
    row.forEach((value, column) => {
      const minValue = column !== prev.firstColumn ? prev.first : prev.second;
      if (value + minValue < curr.first) {
        [curr.first, curr.second] = [value + minValue, curr.first];
        curr.firstColumn = column;
      } else {
        curr.second = Math.min(curr.second, value + minValue);
      }
    });
    prev = curr;
  });
  return prev.first;
}
