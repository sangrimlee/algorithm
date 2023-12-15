/**
 * 1624. Largest Substring Between Two Equal Characters
 * https://leetcode.com/problems/largest-substring-between-two-equal-characters
 */
export function maxLengthBetweenEqualCharacters(s: string): number {
  let answer = -1;
  const startIndices = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const startIndex = startIndices.get(char);
    if (startIndex !== undefined) {
      answer = Math.max(answer, i - startIndex - 1);
    } else {
      startIndices.set(char, i);
    }
  }
  return answer;
}
