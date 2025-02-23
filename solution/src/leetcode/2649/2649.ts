/**
 * 2649. Nested Array Generator
 * https://leetcode.com/problems/nested-array-generator
 */
type MultidimensionalArray = (MultidimensionalArray | number)[];

export function* inorderTraversal(arr: MultidimensionalArray): Generator<number, void, unknown> {
  for (const value of arr) {
    if (Array.isArray(value)) {
      yield* inorderTraversal(value);
    } else {
      yield value;
    }
  }
}
