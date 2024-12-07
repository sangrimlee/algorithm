import { minimumSize } from './leetcode-1760';

describe('2024-12-07: LeetCode 1760', () => {
  test('Example 1', () => {
    expect(minimumSize([9], 2)).toBe(3);
  });
  test('Example 2', () => {
    expect(minimumSize([2, 4, 8, 2], 4)).toBe(2);
  });
});
