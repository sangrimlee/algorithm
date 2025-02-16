/**
 * 3090. Maximum Length Substring With Two Occurrences
 * https://leetcode.com/problems/maximum-length-substring-with-two-occurrences
 */
export function maximumLengthSubstring(s: string): number {
  const n = s.length;
  const aCode = 'a'.charCodeAt(0);
  const charCount = new Array<number>(26).fill(0);

  let answer = 0;
  let [start, end] = [0, 0];
  while (end < n) {
    const endCode = s.charCodeAt(end) - aCode;
    charCount[endCode] += 1;
    while (2 < charCount[endCode]) {
      const startCode = s.charCodeAt(start) - aCode;
      charCount[startCode] -= 1;
      start += 1;
    }
    answer = Math.max(answer, end - start + 1);
    end += 1;
  }
  return answer;
}
