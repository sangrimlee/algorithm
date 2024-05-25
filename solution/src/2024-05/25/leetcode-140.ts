/**
 * 140. Word Break II
 * https://leetcode.com/problems/word-break-ii
 */
export function wordBreak(s: string, wordDict: string[]): string[] {
  const map = new Map<string, string[]>([['', ['']]]);

  function dfs(s: string): string[] {
    if (map.has(s)) {
      return map.get(s)!;
    }
    const result: string[] = [];
    for (const word of wordDict) {
      if (!s.startsWith(word)) continue;
      for (const substr of dfs(s.substring(word.length))) {
        result.push(substr.length === 0 ? word : `${word} ${substr}`);
      }
    }
    map.set(s, result);
    return result;
  }

  return dfs(s);
}
