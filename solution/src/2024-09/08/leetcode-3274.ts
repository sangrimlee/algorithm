/**
 * 3274. Check if Two Chessboard Squares Have the Same Color
 * https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color
 */
export function checkTwoChessboards(coordinate1: string, coordinate2: string): boolean {
  return getCoordinateColor(coordinate1) === getCoordinateColor(coordinate2);
}

function getCoordinateColor(coordinate: string): 'black' | 'white' {
  const col = coordinate.charCodeAt(0) - 'a'.charCodeAt(0);
  const row = parseInt(coordinate[1]) - 1;
  return (col + row) % 2 === 0 ? 'black' : 'white';
}
