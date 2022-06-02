/*
  867. Transpose Matrix
  https://leetcode.com/problems/transpose-matrix/
*/

function transpose(matrix: number[][]): number[][] {
  const [m, n] = [matrix.length, matrix[0].length];
  const result = Array.from({ length: n }).map(() =>
    new Array(m).fill(undefined)
  );

  matrix.forEach((row, rowIndex) => {
    row.forEach((value, colIndex) => {
      result[colIndex][rowIndex] = value;
    });
  });

  return result;
}

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
