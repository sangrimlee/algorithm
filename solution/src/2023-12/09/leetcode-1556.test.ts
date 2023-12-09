import { thousandSeparator } from './leetcode-1556';

describe('2023-12-09: LeetCode 1556', () => {
  test('Example 1', () => {
    expect(thousandSeparator(987)).toBe('987');
  });
  test('Example 2', () => {
    expect(thousandSeparator(1234)).toBe('1.234');
  });
});
