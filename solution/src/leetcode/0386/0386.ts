/**
 * 386. Lexicographical Numbers
 * https://leetcode.com/problems/lexicographical-numbers
 */
export function lexicalOrder(n: number): number[] {
  const answer: number[] = [];
  function dfs(num: number): void {
    if (n < num) {
      return;
    }
    answer.push(num);
    for (let digit = 0; digit < 10; digit++) {
      dfs(10 * num + digit);
    }
  }
  for (let i = 1; i < 10; i++) {
    dfs(i);
  }
  return answer;
}
