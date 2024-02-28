/**
 * 2363. Merge Similar Items
 * https://leetcode.com/problems/merge-similar-items
 */
export function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
  const map = new Map<number, number>();
  function merge(items: number[][]) {
    for (const [value, weight] of items) {
      map.set(value, (map.get(value) ?? 0) + weight);
    }
  }
  merge(items1);
  merge(items2);
  return Array.from(map.entries()).sort((a, b) => a[0] - b[0]);
}
