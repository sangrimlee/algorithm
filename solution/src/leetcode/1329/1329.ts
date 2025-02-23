/**
 * 1329. Sort the Matrix Diagonally
 * https://leetcode.com/problems/sort-the-matrix-diagonally
 */
export function diagonalSort(mat: number[][]): number[][] {
  const [m, n] = [mat.length, mat[0].length];
  const diagonals = new Map<number, number[]>();
  mat.forEach((row, i) => {
    row.forEach((num, j) => {
      const nums = diagonals.get(i - j) ?? [];
      nums.push(num);
      diagonals.set(i - j, nums);
    });
  });

  diagonals.forEach((nums) => {
    nums.sort((a, b) => b - a);
  });

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const diagonal = diagonals.get(i - j)?.pop();
      if (diagonal !== undefined) {
        mat[i][j] = diagonal;
      }
    }
  }
  return mat;
}
