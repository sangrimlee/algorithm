/**
 * 1582. Special Positions in a Binary Matrix
 * https://leetcode.com/problems/special-positions-in-a-binary-matrix
 */
export function numSpecial(mat: number[][]): number {
  const [m, n] = [mat.length, mat[0].length];
  const rows = new Array<number>(m).fill(0);
  const cols = new Array<number>(n).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      rows[i] += mat[i][j];
      cols[j] += mat[i][j];
    }
  }

  let answer = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rows[i] === 1 && cols[j] === 1 && mat[i][j] === 1) {
        answer += 1;
      }
    }
  }
  return answer;
}
