import { twoOutOfThree } from './leetcode-2032';

describe('2024-01-24: LeetCode 2032', () => {
  function sortByASC(a: number, b: number) {
    return a - b;
  }
  test('Example 1', () => {
    expect(twoOutOfThree([1, 1, 3, 2], [2, 3], [3]).sort(sortByASC)).toEqual([2, 3]);
  });
  test('Example 2', () => {
    expect(twoOutOfThree([3, 1], [2, 3], [1, 2]).sort(sortByASC)).toEqual([1, 2, 3]);
  });
  test('Example 3', () => {
    expect(twoOutOfThree([1, 2, 2], [4, 3, 3], [5]).sort(sortByASC)).toEqual([]);
  });
});
