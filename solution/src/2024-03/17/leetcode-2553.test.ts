import { separateDigits } from './leetcode-2553';

describe('2024-03-17: LeetCode 2553', () => {
  test('Example 1', () => {
    expect(separateDigits([13, 25, 83, 77])).toEqual([1, 3, 2, 5, 8, 3, 7, 7]);
  });
  test('Example 2', () => {
    expect(separateDigits([7, 1, 3, 9])).toEqual([7, 1, 3, 9]);
  });
});
