/**
 * 779. K-th Symbol in Grammar
 * https://leetcode.com/problems/k-th-symbol-in-grammar
 */
export function kthGrammar(n: number, k: number): number {
  if (n === 1) {
    return 0;
  }
  let symbol = 0;
  for (let row = n; 1 < row; row--) {
    const cols = 2 ** (row - 1);
    if (cols / 2 < k) {
      symbol = symbol === 0 ? 1 : 0;
      k -= cols / 2;
    }
  }
  return symbol;
}
