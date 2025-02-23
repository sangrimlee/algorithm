/**
 * 1593. Split a String Into the Max Number of Unique Substrings
 * https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings
 */
export function maxUniqueSplit(s: string): number {
  return backtrack(s, new Set());
}

function backtrack(s: string, seen: Set<string>, start = 0): number {
  if (start === s.length) {
    return 0;
  }

  let result = 0;
  for (let end = start + 1; end <= s.length; end++) {
    const substring = s.substring(start, end);
    if (seen.has(substring)) continue;
    seen.add(substring);
    result = Math.max(result, backtrack(s, seen, end) + 1);
    seen.delete(substring);
  }
  return result;
}
