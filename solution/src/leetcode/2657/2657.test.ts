import { findThePrefixCommonArray } from './2657';

describe('LeetCode 2657', () => {
  test('Example 1', () => {
    expect(findThePrefixCommonArray([1, 3, 2, 4], [3, 1, 2, 4])).toEqual([0, 2, 3, 4]);
  });
  test('Example 2', () => {
    expect(findThePrefixCommonArray([2, 3, 1], [3, 1, 2])).toEqual([0, 1, 3]);
  });
});
