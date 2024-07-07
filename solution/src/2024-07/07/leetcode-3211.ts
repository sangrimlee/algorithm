/**
 * 3211. Generate Binary Strings Without Adjacent Zeros
 * https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/
 */
export function validStrings(n: number): string[] {
  const answer: string[] = [];
  function dfs(str: string) {
    if (str.length === n) {
      answer.push(str);
      return;
    }
    dfs(str + '1');
    if (str[str.length - 1] === '1') {
      dfs(str + '0');
    }
  }

  dfs('0');
  dfs('1');
  return answer;
}
