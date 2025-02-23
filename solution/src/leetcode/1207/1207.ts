/**
 * 1207. Unique Number of Occurrences
 * https://leetcode.com/problems/unique-number-of-occurrences/
 */
export function uniqueOccurrences(arr: number[]): boolean {
  if (arr.length <= 1) {
    return true;
  }

  const map = new Map<number, number>();
  for (const num of arr) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  const set = new Set();
  for (const count of map.values()) {
    if (set.has(count)) {
      return false;
    }
    set.add(count);
  }

  return true;
}
