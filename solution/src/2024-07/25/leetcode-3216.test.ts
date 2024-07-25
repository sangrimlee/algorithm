import { getSmallestString } from './leetcode-3216';

describe('2024-07-25: LeetCode 3216', () => {
  test('Example 1', () => {
    expect(getSmallestString('45320')).toBe('43520');
  });

  test('Example 2', () => {
    expect(getSmallestString('001')).toBe('001');
  });
});
