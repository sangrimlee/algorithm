/**
 * 2625. Flatten Deeply Nested Array
 * https://leetcode.com/problems/flatten-deeply-nested-array
 */
type MultiDimensionalArray = (number | MultiDimensionalArray)[];

export function flat(arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
  const createStackWithDepth = (arr: MultiDimensionalArray, depth: number) => {
    return arr.map((value) => ({ value, depth }));
  };

  const stack = createStackWithDepth(arr, n);
  const result: MultiDimensionalArray = [];

  while (0 < stack.length) {
    const peek = stack.pop();
    if (peek === undefined) {
      continue;
    }
    const { value, depth } = peek;
    if (Array.isArray(value) && 0 < depth) {
      stack.push(...createStackWithDepth(value, depth - 1));
    } else {
      result.push(value);
    }
  }

  return result.reverse();
}
