import { findClosestElements } from './0658';

describe('LeetCode 0658', () => {
  test('Example 1', () => {
    expect(findClosestElements([1, 2, 3, 4, 5], 4, 3)).toEqual([1, 2, 3, 4]);
  });

  test('Example 2', () => {
    expect(findClosestElements([1, 2, 3, 4, 5], 4, -1)).toEqual([1, 2, 3, 4]);
  });

  test('Example 3', () => {
    expect(findClosestElements([1, 1, 1, 10, 10, 10], 1, 9)).toEqual([10]);
  });
});
