/**
 * 2643. Row With Maximum Ones
 * https://leetcode.com/problems/row-with-maximum-ones
 */
export function rowAndMaximumOnes(mat: number[][]): number[] {
  function countOnes(row: number[]) {
    return row.reduce((prev, num) => (num === 1 ? prev + 1 : prev), 0);
  }

  let rowIndex = -1;
  let maxOneCount = -1;
  mat.forEach((row, i) => {
    const oneCount = countOnes(row);
    if (maxOneCount < oneCount) {
      rowIndex = i;
      maxOneCount = oneCount;
    }
  });

  return [rowIndex, maxOneCount];
}
