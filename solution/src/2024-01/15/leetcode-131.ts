/**
 * 131. Palindrome Partitioning
 * https://leetcode.com/problems/palindrome-partitioning
 */
export function partition(s: string): string[][] {
  function isPalindrome(s: string) {
    if (s.length === 0) {
      return false;
    }
    for (let i = 0; i <= s.length / 2; i++) {
      if (s[i] !== s[s.length - i - 1]) {
        return false;
      }
    }
    return true;
  }

  const answer: string[][] = [];
  function dfs(i: number, current: string, substrings: string[]) {
    if (i === s.length) {
      if (isPalindrome(current)) {
        answer.push([...substrings, current]);
      }
      return;
    }
    if (isPalindrome(current)) {
      substrings.push(current);
      dfs(i + 1, s[i], substrings);
      substrings.pop();
    }
    dfs(i + 1, current + s[i], substrings);
  }
  dfs(0, '', []);
  return answer;
}
