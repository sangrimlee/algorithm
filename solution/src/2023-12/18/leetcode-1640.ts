/**
 * 1640. Check Array Formation Through Concatenation
 * https://leetcode.com/problems/check-array-formation-through-concatenation
 */
export function canFormArray(arr: number[], pieces: number[][]): boolean {
  const indices = new Map(arr.map((v, i) => [v, i]));
  const canFormPiece = (piece: number[]) => {
    const startIndex = indices.get(piece[0]) ?? -1;
    if (startIndex === -1) {
      return false;
    }
    for (let i = 0; i < piece.length; i++) {
      if (piece[i] !== arr[startIndex + i]) {
        return false;
      }
    }
    return true;
  };
  return pieces.every(canFormPiece);
}
