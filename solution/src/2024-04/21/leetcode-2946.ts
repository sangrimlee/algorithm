/**
 * 2946. Matrix Similarity After Cyclic Shifts
 * https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts
 */
export function areSimilar(mat: number[][], k: number): boolean {
  const [m, n] = [mat.length, mat[0].length];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] !== mat[i][(j + k) % n]) {
        return false;
      }
    }
  }
  return true;
}
