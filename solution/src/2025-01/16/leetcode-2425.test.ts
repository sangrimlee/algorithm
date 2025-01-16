import { xorAllNums } from './leetcode-2425';

describe('2025-01-16: LeetCode 2425', () => {
  test('Example 1', () => {
    expect(xorAllNums([2, 1, 3], [10, 2, 5, 0])).toBe(13);
  });
  test('Example 2', () => {
    expect(xorAllNums([1, 2], [3, 4])).toBe(0);
  });
});
