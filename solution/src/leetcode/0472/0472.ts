/**
 * 472. Concatenated Words
 * https://leetcode.com/problems/concatenated-words
 */
export function findAllConcatenatedWordsInADict(words: string[]): string[] {
  const dict = new Set<string>(words);

  const dfs = (word: string, start: number, visited: boolean[]) => {
    if (start === word.length) {
      return true;
    }
    if (visited[start]) {
      return false;
    }
    visited[start] = true;

    // if start is 0 (it mean first word), check until lastIndex - 1.
    const lastEndIndex = start === 0 ? word.length - 1 : word.length;
    for (let end = lastEndIndex; start < end; end--) {
      if (dict.has(word.substring(start, end)) && dfs(word, end, visited)) {
        return true;
      }
    }

    return false;
  };

  const answer = new Array<string>();
  for (const word of words) {
    const visited = new Array<boolean>(word.length).fill(false);
    if (dfs(word, 0, visited)) {
      answer.push(word);
    }
  }

  return answer;
}
