/**
 * 2677. Chunk Array
 * https://leetcode.com/problems/chunk-array
 */
export function chunk<T>(arr: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }).map((_, i) =>
    arr.slice(i * size, (i + 1) * size),
  );
}
