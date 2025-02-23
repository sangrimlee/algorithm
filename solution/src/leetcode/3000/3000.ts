/**
 * 3000. Maximum Area of Longest Diagonal Rectangle
 * https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle
 */
export function areaOfMaxDiagonal(dimensions: number[][]): number {
  let answer = 0;
  let maxDiagonal = 0;
  for (const [x, y] of dimensions) {
    const diagonal = Math.sqrt(x ** 2 + y ** 2);
    if (maxDiagonal < diagonal) {
      maxDiagonal = diagonal;
      answer = x * y;
    } else if (maxDiagonal === diagonal) {
      answer = Math.max(answer, x * y);
    }
  }
  return answer;
}
