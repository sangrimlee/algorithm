/**
 * 2634. Filter Elements from Array
 * https://leetcode.com/problems/filter-elements-from-array
 */
export function filter<T>(arr: T[], fn: (n: T, i: number) => unknown): T[] {
  const result: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }
  return result;
}
