import { kthDistinct } from './leetcode-2053';

describe('2024-01-26: LeetCode 2053', () => {
  test('Example 1', () => {
    expect(kthDistinct(['d', 'b', 'c', 'b', 'c', 'a'], 2)).toBe('a');
  });
  test('Example 2', () => {
    expect(kthDistinct(['aaa', 'aa', 'a'], 1)).toBe('aaa');
  });
  test('Example 3', () => {
    expect(kthDistinct(['a', 'b', 'a'], 3)).toBe('');
  });
});
