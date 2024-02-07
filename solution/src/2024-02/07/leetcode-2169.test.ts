import { countOperations } from './leetcode-2169';

describe('2024-02-07: LeetCode 2169', () => {
  test('Example 1', () => {
    expect(countOperations(2, 3)).toBe(3);
  });
  test('Example 2', () => {
    expect(countOperations(10, 10)).toBe(1);
  });
});
