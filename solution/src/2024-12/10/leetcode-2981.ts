/**
 * 2981. Find Longest Special Substring That Occurs Thrice I
 * https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i
 */
export function maximumLength(s: string): number {
  const n = s.length;
  const counter = new Map<string, number>();
  for (let start = 0; start < n; start++) {
    let substrLength = 0;
    for (let end = start; end < n; end++) {
      if (s[start] !== s[end]) {
        break;
      }
      substrLength += 1;
      const substr = s[start].repeat(substrLength);
      counter.set(substr, (counter.get(substr) ?? 0) + 1);
    }
  }
  let answer = -1;
  for (const [substr, count] of counter) {
    if (3 <= count) {
      answer = Math.max(answer, substr.length);
    }
  }
  return answer;
}
