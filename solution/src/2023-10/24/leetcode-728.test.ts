import { selfDividingNumbers } from './leetcode-728';

describe('2023-10-24: LeetCode 728', () => {
  test('Example 1', () => {
    expect(selfDividingNumbers(1, 22)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]);
  });
  test('Example 2', () => {
    expect(selfDividingNumbers(47, 85)).toEqual([48, 55, 66, 77]);
  });
});
