import { range } from '@algorithm/lib';

/**
 * 1727. Largest Submatrix With Rearrangements
 * https://leetcode.com/problems/largest-submatrix-with-rearrangements
 */
export function largestSubmatrix(matrix: number[][]): number {
  const [m, n] = [matrix.length, matrix[0].length];

  let answer = 0;
  let prevHeights: [number, number][] = [];
  for (const row of range(m)) {
    const cols = new Set<number>();
    const heights: [number, number][] = [];
    prevHeights.forEach(([height, col]) => {
      if (matrix[row][col] === 1) {
        heights.push([height + 1, col]);
        cols.add(col);
      }
    });

    for (const col of range(n)) {
      if (!cols.has(col) && matrix[row][col] === 1) {
        heights.push([1, col]);
      }
    }

    heights.forEach(([height], i) => {
      answer = Math.max(answer, height * (i + 1));
    });

    prevHeights = heights;
  }

  return answer;
}
