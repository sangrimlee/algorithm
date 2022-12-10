/**
 * 3. Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

class Dict {
  map: Map<string, boolean>;

  constructor() {
    this.map = new Map();
  }

  isExist(char: string): boolean {
    return !!this.map.get(char);
  }

  add(char: string): void {
    this.map.set(char, true);
  }

  remove(char: string): void {
    this.map.set(char, false);
  }
}

export function lengthOfLongestSubstring(s: string): number {
  const dict = new Dict();

  let answer = 0;
  let [start, end] = [0, 0];

  while (end < s.length) {
    while (dict.isExist(s[end])) {
      dict.remove(s[start]);
      start++;
    }
    dict.add(s[end]);
    answer = Math.max(answer, end - start + 1);
    end++;
  }

  return answer;
}
