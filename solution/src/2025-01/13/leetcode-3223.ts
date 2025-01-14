/**
 * 3223. Minimum Length of String After Operations
 * https://leetcode.com/problems/minimum-length-of-string-after-operations
 */
export function minimumLength(s: string): number {
  const counter = new Map<string, number>();
  for (const char of s) {
    counter.set(char, (counter.get(char) ?? 0) + 1);
  }

  let answer = 0;
  for (const count of counter.values()) {
    if (count % 2 == 0) {
      answer += 2;
    } else {
      answer += 1;
    }
  }
  return answer;
}
