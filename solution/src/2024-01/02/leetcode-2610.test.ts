import { findMatrix } from './leetcode-2610';

describe('2024-01-02: LeetCode 2610', () => {
  test('Example 1', () => {
    expect(findMatrix([1, 3, 4, 1, 2, 3, 1])).toEqual([[1, 3, 4, 2], [1, 3], [1]]);
  });
  test('Example 2', () => {
    expect(findMatrix([1, 2, 3, 4])).toEqual([[1, 2, 3, 4]]);
  });
});
