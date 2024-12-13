/**
 * 3360. Stone Removal Game
 * https://leetcode.com/problems/stone-removal-game
 */
export function canAliceWin(n: number): boolean {
  let remain = n;
  for (let turn = 0; turn <= 10; turn++) {
    if (remain < 10 - turn) {
      return turn % 2 !== 0;
    }
    remain -= 10 - turn;
  }
  return true;
}
