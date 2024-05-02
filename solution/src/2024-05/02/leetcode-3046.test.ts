import { isPossibleToSplit } from './leetcode-3046';

describe('2024-05-02: LeetCode 3046', () => {
  test('Example 1', () => {
    expect(isPossibleToSplit([1, 1, 2, 2, 3, 4])).toBe(true);
  });
  test('Example 2', () => {
    expect(isPossibleToSplit([1, 1, 1, 1])).toBe(false);
  });
});
