/**
 * 1122. Relative Sort Array
 * https://leetcode.com/problems/relative-sort-array
 */
export function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const indicies = new Map(arr2.map((num, i) => [num, i]));
  const getIndex = (num: number) => indicies.get(num) ?? arr2.length;
  const sortByIndex = (a: number, b: number): number => {
    const [aIndex, bIndex] = [getIndex(a), getIndex(b)];
    return aIndex === bIndex ? a - b : aIndex - bIndex;
  };
  return arr1.sort(sortByIndex);
}
