/**
 * 140. Word Break II
 * https://leetcode.com/problems/word-break-ii
 */
export function wordBreak(s: string, wordDict: string[]): string[] {
  const memo = new Map<string, string[]>([['', ['']]]);

  function dfs(s: string): string[] {
    const prevResult = memo.get(s);
    if (prevResult !== undefined) {
      return prevResult;
    }

    const result: string[] = [];
    for (const word of wordDict) {
      if (!s.startsWith(word)) continue;
      for (const substr of dfs(s.substring(word.length))) {
        result.push(substr.length === 0 ? word : `${word} ${substr}`);
      }
    }
    memo.set(s, result);
    return result;
  }

  return dfs(s);
}
