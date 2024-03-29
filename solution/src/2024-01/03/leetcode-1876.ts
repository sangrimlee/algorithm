/**
 * 1876. Substrings of Size Three with Distinct Characters
 * https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters
 */
export function countGoodSubstrings(s: string): number {
  function isGoodSubstring(substring: string) {
    return new Set(substring).size === substring.length;
  }

  let answer = 0;
  for (let i = 0; i < s.length - 2; i++) {
    const substring = s.substring(i, i + 3);
    if (isGoodSubstring(substring)) {
      answer += 1;
    }
  }
  return answer;
}
