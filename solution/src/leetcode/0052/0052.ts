/**
 * 52. N-Queens II
 * https://leetcode.com/problems/n-queens-ii/
 */

export function totalNQueens(n: number): number {
  // 따로 사용한 Column과 Diagonal을 저장해서 사용.
  const cols = new Set<number>();
  const posDiags = new Set<number>();
  const negDiags = new Set<number>();

  function dfs(row: number) {
    if (row === n) {
      return 1;
    }

    let result = 0;

    for (let col = 0; col < n; col++) {
      if (posDiags.has(row + col) || negDiags.has(row - col) || cols.has(col)) {
        continue;
      }

      posDiags.add(row + col);
      negDiags.add(row - col);
      cols.add(col);

      result += dfs(row + 1);

      posDiags.delete(row + col);
      negDiags.delete(row - col);
      cols.delete(col);
    }

    return result;
  }

  return dfs(0);
}

/* 기존의 leetcode-51.ts 방법
function totalNQueens(n: number): number {
  let result = 0;
  const stack: number[] = [];

  function isPossible(col: number, row: number, index: number) {
    return !(col === index || stack.length - row === Math.abs(col - index));
  }

  function backtracking(): void {
    if (stack.length === n) {
      result += 1;
      return;
    }
    for (let i = 0; i < n; i++) {
      if (stack.every((row, col) => isPossible(row, col, i))) {
        stack.push(i);
        backtracking();
        stack.pop();
      }
    }
    return;
  }

  backtracking();
  return result;
}
*/
