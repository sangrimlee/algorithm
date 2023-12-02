import { kLengthApart } from './leetcode-1437';

describe('2023-12-02: LeetCode 1437', () => {
  test('Example 1', () => {
    expect(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2)).toBe(true);
  });
  test('Example 2', () => {
    expect(kLengthApart([1, 0, 0, 1, 0, 1], 2)).toBe(false);
  });
});
