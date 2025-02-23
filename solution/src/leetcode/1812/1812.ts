/**
 * 1812. Determine Color of a Chessboard Square
 * https://leetcode.com/problems/determine-color-of-a-chessboard-square
 */
export function squareIsWhite(coordinates: string): boolean {
  return coordinates.charCodeAt(0) % 2 !== parseInt(coordinates[1]) % 2;
}
