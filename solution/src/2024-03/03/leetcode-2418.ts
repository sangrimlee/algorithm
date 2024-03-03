/**
 * 2418. Sort the People
 * https://leetcode.com/problems/sort-the-people
 */
export function sortPeople(names: string[], heights: number[]): string[] {
  const n = names.length;
  const map = new Map<number, string>();
  for (let i = 0; i < n; i++) {
    map.set(heights[i], names[i]);
  }

  return [...map.entries()].sort(([a], [b]) => b - a).map((entry) => entry[1]);
}
