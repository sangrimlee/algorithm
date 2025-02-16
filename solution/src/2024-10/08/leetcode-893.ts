/**
 * 893. Groups of Special-Equivalent Strings
 * https://leetcode.com/problems/groups-of-special-equivalent-strings
 */
export function numSpecialEquivGroups(words: string[]): number {
  const groups = new Set<string>(words.map(createGroup));
  return groups.size;
}

function createGroup(s: string): string {
  const odd = new Array<number>(26).fill(0);
  const even = new Array<number>(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i) - 'a'.charCodeAt(0);
    if (i % 2 === 0) {
      even[charCode] += 1;
    } else {
      odd[charCode] += 1;
    }
  }
  return [odd, even].join(',');
}
