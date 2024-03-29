/**
 * 2399. Check Distances Between Same Letters
 * https://leetcode.com/problems/check-distances-between-same-letters
 */
export function checkDistances(s: string, distances: number[]): boolean {
  const aCode = 'a'.charCodeAt(0);
  const indices = new Map<number, number>();
  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i);
    const index = indices.get(charCode);
    if (index === undefined) {
      indices.set(charCode, i);
      continue;
    }

    const distance = i - index - 1;
    if (distances[charCode - aCode] !== distance) {
      return false;
    }
  }
  return true;
}
