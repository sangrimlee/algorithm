import { restoreString } from './1528';

describe('LeetCode 1528', () => {
  test('Example 1', () => {
    expect(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3])).toBe('leetcode');
  });
  test('Example 2', () => {
    expect(restoreString('abc', [0, 1, 2])).toBe('abc');
  });
});
