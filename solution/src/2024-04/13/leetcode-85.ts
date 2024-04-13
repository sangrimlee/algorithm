/**
 * 85. Maximal Rectangle
 * https://leetcode.com/problems/maximal-rectangle
 */
export function maximalRectangle(matrix: string[][]): number {
  const [rows, cols] = [matrix.length, matrix[0].length];

  let answer = 0;
  const heights = new Array(cols + 1).fill(0);
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cell = matrix[row][col];
      heights[col] = cell === '1' ? heights[col] + 1 : 0;
    }

    const stack: number[] = [-1];
    for (let col = 0; col <= cols; col++) {
      while (heights[col] < heights[stack[stack.length - 1]]) {
        const height = heights[stack.pop()!];
        const width = col - 1 - stack[stack.length - 1];
        answer = Math.max(answer, height * width);
      }
      stack.push(col);
    }
  }

  return answer;
}
