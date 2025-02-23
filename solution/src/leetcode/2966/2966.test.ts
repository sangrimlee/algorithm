import { divideArray } from './2966';

describe('LeetCode 2966', () => {
  test('Example 1', () => {
    expect(divideArray([1, 3, 4, 8, 7, 9, 3, 5, 1], 2)).toEqual([
      [1, 1, 3],
      [3, 4, 5],
      [7, 8, 9],
    ]);
  });
  test('Example 2', () => {
    expect(divideArray([1, 3, 3, 2, 7, 3], 3)).toEqual([]);
  });
});
