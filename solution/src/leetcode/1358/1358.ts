/**
 * 1358. Number of Substrings Containing All Three Characters
 * https://leetcode.com/problems/number-of-substrings-containing-all-three-characters
 */
export function numberOfSubstrings(s: string): number {
  const n = s.length;
  const aCharCode = 'a'.charCodeAt(0);
  const lastIndices = [-1, -1, -1];

  let answer = 0;
  for (let i = 0; i < n; i++) {
    const charIndex = s.charCodeAt(i) - aCharCode;
    lastIndices[charIndex] = i;
    answer += 1 + Math.min(...lastIndices);
  }
  return answer;
}
