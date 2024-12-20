/**
 * 1222. Queens That Can Attack the King
 * https://leetcode.com/problems/queens-that-can-attack-the-king
 */
export function queensAttacktheKing(queens: number[][], king: number[]): number[][] {
  const answer: number[][] = [];
  const set = new Set(queens.map((v) => v.toString()));

  const [xKing, yKing] = king;
  for (const dx of [-1, 0, 1]) {
    for (const dy of [-1, 0, 1]) {
      for (let s = 1; s <= 8; s++) {
        const position = [xKing + s * dx, yKing + s * dy];
        if (set.has(position.toString())) {
          answer.push(position);
          break;
        }
      }
    }
  }
  return answer;
}
