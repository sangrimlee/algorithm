/**
 * 2661. First Completely Painted Row or Column
 * https://leetcode.com/problems/first-completely-painted-row-or-column
 */
export function firstCompleteIndex(arr: number[], mat: number[][]): number {
  const [m, n] = [mat.length, mat[0].length];
  const positions = new Map<number, [number, number]>();
  mat.forEach((nums, row) => {
    nums.forEach((value, col) => {
      positions.set(value, [row, col]);
    });
  });

  const rowCounts = new Array<number>(m).fill(0);
  const colCounts = new Array<number>(n).fill(0);
  for (let i = 0; i < arr.length; i++) {
    const position = positions.get(arr[i]);
    if (position === undefined) continue;
    const [row, col] = position;
    rowCounts[row] += 1;
    colCounts[col] += 1;

    if (rowCounts[row] === n || colCounts[col] === m) {
      return i;
    }
  }
  return -1;
}
